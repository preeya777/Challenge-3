// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
    const employees = []; // Initialize an empty array to store employee objects
  
    // Ask the user for the number of employees they want to input
    const numEmployees = prompt("How many employees would you like to add?");
  
    // Loop through each employee to collect their data
    for (let i = 0; i < numEmployees; i++) {
      const name = prompt("Enter employee name:");
      const salaryInput = prompt("Enter employee salary:");
      const salary = Number(salaryInput);
  
      // Create an employee object with the collected data
      const employee = {
        name: name,
        salary: salary
      };
  
      // Push the employee object into the employees array
      employees.push(employee);
    }
  
    return employees; // Return the array of employee objects
  }

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary

  let totalSalary = 0;

  // Loop through each employee in the array
  for (let i = 0; i < employeesArray.length; i++) {
    let employee = employeesArray[i];
    totalSalary = totalSalary + employee.salary;
  }

  // Calculate the average salary
  let averageSalary = totalSalary / employeesArray.length;

  // Display the average salary
  console.log("Average Salary: $" + averageSalary.toFixed(2));
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee

    // Check if the array is empty
    if (employeesArray.length === 0) {
      return "No employees available.";
    }
  
    // Generate a random index within the range of the array length
    const randomIndex = Math.floor(Math.random() * employeesArray.length);
  
    // Retrieve the employee object at the random index
    const randomEmployee = employeesArray[randomIndex];
  
    return randomEmployee; // Return the randomly selected employee
  }


/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
