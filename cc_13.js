//Task 2: Adding Employee Cards Dynamically
let cnt = 0; //Ensure that each card has a unique id

function createElement(name, position) {
    const employeeContainer = document.getElementById("employeeContainer") //this is the container where the cards will be appended
    let card = document.createElement("div"); //this is the employee card that will be appended to the container

    card.setAttribute("class", "employeeCard"); //where i set the attribute class to employee
    card.setAttribute("id", 'employee${cnt}'); //set an id for each card
    card.innerHTML = `<h3>${name}</h3><p>${position}</p>`; //where i put name header and position for employee
}

//Test Cases for Task 2
createElement("John Doe", "Software Engineer");
createElement("Jane Doe", "Product Manager");
createElement("Jim Doe", "Data Analyst");