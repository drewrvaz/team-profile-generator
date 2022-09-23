// Team profiles
const Employee = require('./lib/employee.js');
const Manager = require('./lib/manager.js');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');

// Required Node modules
const fs = require('fs');
const inquirer = require('inquirer'); 

// Function to initialize the program upon opening
function initialize() {
  addEmployee();
  startHtml();
}
// Array to contain the team inputs
const teamArray = [];

// Begin employee prompts
function addEmployee() {
  inquirer.prompt([
    { // add employee name
      type: "input",
      name: "name",
      message: "Enter the employee's name."
    },
    { // select employee type
      type: "list",
      message: "Select the employee's role.",
      choices: [
        "Engineer",
        "Intern",
        "Manager"
      ],
      name: "role"
    },
    { // add employee id number
      type: "input",
      name: "id",
      message: "Enter the employee's ID number."
    },
    { // add employee email
      type: "input",
      name: "email",
      message: "Enter the employee's email address."
    }
  ]) // Then function to determine what other information needs to be added for the employee basaed on their role
  .then(function({name, role, id, email}) {
    let roleInfo = "";
    if (role === "Engineer") {
      roleInfo = "github username";
    } else if (role === "Intern") {
      roleInfo = "school name";
    } else {
      roleInfo = "office number";
    }
    inquirer.prompt([
      { // prompt to enter necessary information for their role
      type: "input",
      message: `Enter the employee's ${roleInfo}.`,
      name: "roleInfo"
      },
      { // select whether or not you would like to add another employee
      type: "list",
      message: "Would you like to add more employees?",
      choices: ["yes", "no"],
      name: "moreEmployees"
      }
    ]) // then function to add the employee input to the teamArray, add the employee to the HTML, and rerun the addEmployee function if the user wants to add another employee
    .then(function({roleInfo, moreEmployees}) {
      let newEmployee;
      if (role === "Engineer") {
        newEmployee = new Engineer(name, id, email, roleInfo);
      } else if (role === "Intern") {
        newEmployee = new Intern(name, id, email, roleInfo);
      } else {
        newEmployee = new Manager(name, id, email, roleInfo);
      } // Pushes the new employee to the teamArray and checks to see if the user would like to add more employees
      teamArray.push(newEmployee);
      addHtml(newEmployee)
      .then(function() {
        if (moreEmployees === "yes") {
          addEmployee();
        } else {
          finishHtml();
        }
      });
    });
  });
}

// Function to begin generating the HTML page that will render the team information
function startHtml() {
  const html = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <title>Team Profile</title>
  </head>
  <body>
    <nav class="navbar navbar-dark bg-dark mb-5">
      <span class="navbar-brand mb-0 h1 w-100 text-center">Team Profile</span>
    </nav>
    <div class="container">
      <div class="row">
      `;
  // Creates the HTML file that will be used to house team info
  fs.writeFile("./output/index.html", html, function(err) {
    if (err) {
      console.log(err);
    }
  });
  console.log("Began writing team HTML file")
}

// Function to write the HTML for each new employee and then append it to the index.html file that will be written
function addHtml(employee) {
  return new Promise(function(resolve, reject) {
    const name = employee.getName();
    const role = employee.getRole();
    const id = employee.getId();
    const email = employee.getEmail();
    let data = "";
    // Engineer info in HTML
    if (role === "Engineer") {
      const github = employee.getGithub(); 
      data = `<div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${name} - ${role}</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${id}</li>
        <li class="list-group-item">Email Address: <a href=mailto:${email}?>${email}</a></li>
        <li class="list-group-item">GitHub: <a href="https://github.com/${github}">${github}</a></li>
      </ul>
    </div>
    ` // Intern info in HTML
    } else if (role === "Intern") {
      const school = employee.getSchool();
      data = `<div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${name} - ${role}</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${id}</li>
        <li class="list-group-item">Email Address: <a href=mailto:${email}?>${email}</a></li>
        <li class="list-group-item">School: ${school}</li>
      </ul>
    </div>
    ` // Manager info in HTML
    } else {
      const officeNumber = employee.getOfficeNumber();
      data = `<div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${name} - ${role}</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${id}</li>
        <li class="list-group-item">Email Address: <a href=mailto:${email}?>${email}</a></li>
        <li class="list-group-item">Office Number: ${officeNumber}</li>
      </ul>
    </div>
    `
    }
    console.log("Team member added");
    // Appends the file to the index.html file
    fs.appendFile("./output/index.html", data, function(err) {
      if (err) {
        return reject(err);
      };
      return resolve();
    });
  });
}

// Fucntion to finish writing the HTML file once the user says they don't want to add anymore employees
function finishHtml() {
  const html = ` </div>
    </div>
  </body>
  </html>`;
  fs.appendFile("./output/index.html", html, function(err) {
    if (err) {
      console.log(err);
    };
  });
  console.log("Finished assembling team")
}

initialize();
