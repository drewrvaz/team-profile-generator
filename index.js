// Team profiles
const Employee = require('./lib/employee.js');
const Manager = require('./lib/manager.js');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');

// Required Node modules
const fs = require('fs');
const inquirer = require('inquirer'); 

// Array to contain the team inputs
const teamArray = [];

// Begin employee prompts
function addEmployee() {
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Enter the employee's name."
    },
    {
      type: "list",
      message: "Select the employee's role.",
      choices: [
        "Engineer",
        "Intern",
        "Manager"
      ],
      name: "role"
    },
    {
      type: "input",
      name: "id",
      message: "Enter the employee's ID number."
    },
    {
      type: "input",
      name: "email",
      message: "Enter the employee's email address."
    },
    {
      type: "input",
      name: "name",
      message: "Enter the employee's name."
    }
  ])
  .then(function({name, role, id, email}) {
    let roleInfo = "";
    if (role === "Engineer") {
      roleInfo = "Github username";
    } else if (role === "Intern") {
      roleInfo = "school name";
    } else {
      roleInfo = "office number";
    }
    inquirer.prompt([
      {
      type: "input",
      message: `Enter the employee's ${roleInfo}.`,
      name: "roleInfo"
      },
      {
      type: "list",
      message: "Would you like to add more employees?",
      choices: ["yes", "no"],
      name: "moreEmployees"
      }
    ])
    .then(function({roleInfo, moreEmployees}) {
      let newEmployee;
      if (role === "Engineer") {
        newEmployee = new Engineer(name, id, email, roleInfo);
      } else if (role === "Intern") {
        newEmployee = new Intern(name, id, email, roleInfo);
      } else {
        newEmployee = new Manager(name, id, email, roleInfo);
      }
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

// Function to generate the HTML page that will render the team information
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
      <div class="row">`;
  fs.writeFile("./output/index.html", html, function(err) {
    if (err) {
      console.log(err);
    }
  });
}

addEmployee();
startHtml();

// Beginning manager prompts
// const addManager = () => {
//   return inquirer.prompt ([
//     {
//       type: 'input',
//       name: 'name',
//       message: 'What is the name of the team manager?',
//       validate: nameInput => {
//         if(nameInput) {
//           return true;
//         } else {
//           console.log('Invalid. Please enter the name of the manager.');
//           return false;
//         }
//       }
//     },
//     {
//       type: 'input',
//       name: 'id',
//       message: 'Please enter the ID of the manager.',
//       validate: nameInput => {
//         if(nameInput) {
//           return true;
//         } else {
//           console.log('Invalid. Please enter a valid work ID.');
//           return false;
//         }
//       }
//     },
//     {
//       type: 'input',
//       name: 'email',
//       message: 'Please enter the email of the manager.',
//       validate: nameInput => {
//         if(nameInput) {
//           return true;
//         } else {
//           console.log('Invalid. Please enter a valid email.');
//           return false;
//         }
//       }
//     },
//     {
//       type: 'input',
//       name: 'officeNumber',
//       message: 'Please enter the office number of the manager.',
//       validate: nameInput => {
//         if(nameInput) {
//           return true;
//         } else {
//           console.log('Invalid. Please enter a valid office number.');
//           return false;
//         }
//       }
//     }
//   ]) // Adds the manager to the teamArray
//   .then(managerInput => {
//     const {name, id, email, officeNumber} = managerInput
//     const manager = new Manager (name, id, email, officeNumber);

//     teamArray.push(manager);
//   })
// };

// // Beginning prompts for adding a new employee
// const addEmployee = () => {
//   console.log('Adding a new employee to the team');

//   return inquirer.prompt ([
//     {
//       type: 'list',
//       name: 'role',
//       message: 'Choose a role for the new employee.',
//       choices: ['Engineer', 'Intern']
//     },
//     {
//       type: 'input',
//       name: 'name',
//       message: 'What is the name of the employee?',
//       validate: nameInput => {
//         if(nameInput) {
//           return true;
//         } else {
//           console.log('Invalid. Please enter the name of the employee.');
//           return false;
//         }
//       }
//     },
//     {
//       type: 'input',
//       name: 'id',
//       message: 'Please enter the ID of the employee.',
//       validate: nameInput => {
//         if(nameInput) {
//           return true;
//         } else {
//           console.log('Invalid. Please enter a valid work ID.');
//           return false;
//         }
//       }
//     },
//     {
//       type: 'input',
//       name: 'email',
//       message: 'Please enter the email of the employee.',
//       validate: nameInput => {
//         if(nameInput) {
//           return true;
//         } else {
//           console.log('Invalid. Please enter a valid email.');
//           return false;
//         }
//       }
//     },
//     {
//       type: 'input',
//       name: 'github',
//       message: 'Please enter the github of the employee.',
//       when: (input) => input.role === 'Engineer',
//       validate: nameInput => {
//         if(nameInput) {
//           return true;
//         } else {
//           console.log('Invalid. Please enter a valid github username.');
//           return false;
//         }
//       }
//     },
//     {
//       type: 'input',
//       name: 'school',
//       message: 'Please enter the school of the employee.',
//       when: (input) => input.role === 'Intern',
//       validate: nameInput => {
//         if(nameInput) {
//           return true;
//         } else {
//           console.log('Invalid. Please enter a valid school name.');
//           return false;
//         }
//       }
//     },
//     {
//       // Gives the user the iption to add a new team member or stop adding them
//       type: 'list',
//       name: 'addEmployee',
//       message: 'Would you like to add more team members?',
//       choices: ["yes", "no"]
//     }
//   ])
//   .then(teamData => {
//     // the input data for each of the employee types
//     if(teamData.role === "Engineer") {
//       const {name, id, email, github} = teamData;
//       const engineer = new Engineer (name, id, email, github);

//       teamArray.push(engineer);
//       console.log(engineer);
//     } else {
//       const {name, id, email, school} = teamData;
//       const intern = new Inter (name, id, email, school);

//       teamArray.push(intern);
//       console.log(intern);
//     }
//     if(addEmployee === "yes") {
//       addEmployee(teamArray);
//     } else {
//       return teamArray;
//     }
//   })
// };

// addManager().then(addEmployee)