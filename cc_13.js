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
    // Create an "Edit" button
  let editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  card.appendChild(editBtn);

  // Grab references to the existing name and position elements
  const employeeName = card.querySelector("h3");
  const employeePosition = card.querySelector("p");

  // Add click event to enable editing
  editBtn.addEventListener("click", (event) => {
    // Prevent the click from triggering the container's click handler
    event.stopPropagation();

    // If we're already editing (input fields exist), do nothing
    if (card.querySelector("input")) return;

    // Create input fields and a Save button
    const nameInput = document.createElement("input");
    nameInput.value = employeeName.textContent;

    const positionInput = document.createElement("input");
    positionInput.value = employeePosition.textContent;

    const saveButton = document.createElement("button");
    saveButton.textContent = "Save";

    // Swap out the static text for input fields
    card.replaceChild(nameInput, employeeName);
    card.replaceChild(positionInput, employeePosition);

    // Add the Save button at the end of the card (just before the Remove button)
    card.insertBefore(saveButton, deleteBtn);

    // Save button event
    saveButton.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent container click event

      // Update the static elements with the new input values
      employeeName.textContent = nameInput.value;
      employeePosition.textContent = positionInput.value;

      // Swap back to static text
      card.replaceChild(employeeName, nameInput);
      card.replaceChild(employeePosition, positionInput);
      card.removeChild(saveButton); // Remove the save button
    });
  });
    // ------------------ End Task 5 ------------------

    // Append the card to the employeeContainer
    employeeContainer.appendChild(card);

    cnt++; // Increment counter for unique id
}

//Test Cases for Task 2
createElement("Carl Baskins", "Software Engineer");
createElement("Jon Jones", "Product Manager");
createElement("Tim Duncan", "Data Analyst");

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