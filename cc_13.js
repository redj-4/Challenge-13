//Task 2: Adding Employee Cards Dynamically
let cnt = 0; //Ensure that each card has a unique id

function createElement(name, position) {
    const employeeContainer = document.getElementById("employeeContainer") //this is the container where the cards will be appended
    let card = document.createElement("div"); //this is the employee card that will be appended to the container

    card.setAttribute("class", "employeeCard"); //where i set the attribute class to employee
    card.setAttribute(`id", 'employee${cnt}`); //set an id for each card
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

  // Append the card to the employeeContainer
  employeeContainer.appendChild(card);

  cnt++; // Increment counter for unique id where i put name header and position for employee
}

//Test Cases for Task 2
createElement("John Doe", "Software Engineer");
createElement("Jane Doe", "Product Manager");
createElement("Jim Doe", "Data Analyst");

//Task 3: Converting NodeLists to Arrays for Bulk Updates
function updateEmployeeCards() {
    // Select all elements with the "employee-card" class
    const employeeCards = document.querySelectorAll('.employee-card');
    
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
  // This will log when any card is clicked (except when a remove button stops propagation)
  console.log(`Employee card clicked: ${event.target.closest('.employee-card')?.id || 'unknown'}`);
});