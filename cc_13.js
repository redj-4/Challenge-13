//Task 2: Adding Employee Cards Dynamically
let cnt = 0; //Ensure that each card has a unique id

function createElement(name, position) {
    const employeeContainer = document.getElementById("employeeContainer"); //container for cards
    let card = document.createElement("div"); //employee card element

    card.setAttribute("class", "employeeCard"); //set class to employeeCard (camelCase)
    card.setAttribute("id", `employee${cnt}`); //set a unique id using backticks
    card.innerHTML = `<h3>${name}</h3><p>${position}</p>`;
    
    // Create the "Remove" button
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Remove";

    // Attach event listener to the "Remove" button to remove its parent card
    deleteBtn.addEventListener("click", (event) => {
        // Remove the card using removeChild
        employeeContainer.removeChild(card);
        // Prevent the click event from bubbling up to the container
        event.stopPropagation();
    });

    // Append the Remove button to the card
    card.appendChild(deleteBtn);

    // -------------------- Task 5: Inline Editing --------------------
    // Define static elements for employee name and position
    const employeeName = card.querySelector('h3');
    const employeePosition = card.querySelector('p');

    // Attach a double-click event listener for inline editing
    card.addEventListener('dblclick', function() {
        // Prevent multiple editing instances if an input already exists
        if (card.querySelector('input')) return;

        // Create input fields and a Save button
        const nameInput = document.createElement('input');
        const positionInput = document.createElement('input');
        const saveButton = document.createElement('button');

        // Prepopulate inputs with the existing name and position
        nameInput.value = employeeName.textContent;
        positionInput.value = employeePosition.textContent;
        saveButton.textContent = 'Save';

        // Replace static text with input fields
        card.replaceChild(nameInput, employeeName);
        card.replaceChild(positionInput, employeePosition);
        card.appendChild(saveButton);

        // Save button functionality: update the static elements and revert inputs
        saveButton.onclick = function() {
            // Update the original elements with new values
            employeeName.textContent = nameInput.value;
            employeePosition.textContent = positionInput.value;

            // Revert back to static text by replacing the inputs with the updated elements
            card.replaceChild(employeeName, nameInput);
            card.replaceChild(employeePosition, positionInput);
            card.removeChild(saveButton);
        }
    });
    // ------------------ End Task 5 ------------------

    // Append the card to the employeeContainer
    employeeContainer.appendChild(card);

    cnt++; // Increment counter for unique id
}

//Test Cases for Task 2
createElement("John Doe", "Software Engineer");
createElement("Jane Doe", "Product Manager");
createElement("Jim Doe", "Data Analyst");

//Task 3: Converting NodeLists to Arrays for Bulk Updates
function updateEmployeeCards() {
    // Select all elements with the "employeeCard" class
    const employeeCards = document.querySelectorAll('.employeeCard');
    
    // Convert NodeList to array and update each card's style
    Array.from(employeeCards).forEach(card => {
      card.style.border = '1px solid black';
      card.style.backgroundColor = 'pink';
      card.style.margin = '10px';
    });
}
  
// Run the bulk update function to apply style changes to all cards
updateEmployeeCards();

//Task 4: Implementing Removal of Employee Cards with Event Bubbling (part of it is in Task 2)
// Attach a click event listener on the parent container
const employeeContainer = document.getElementById("employeeContainer");
employeeContainer.addEventListener("click", (event) => {
    const card = event.target.closest('.employeeCard');
    if (card) {
      // Display an alert pop-up with the card's id when the card is clicked
      alert(`Employee card clicked: ${card.id}`);
    }
});