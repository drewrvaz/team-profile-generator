// Team profiles
const Employee = require('./lib/employee.js');
const Manager = require('./lib/manager.js');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');

// Required Node modules
const fs = require('fs');
const inquirer = require('inquirer'); 
const generatePage = require

// Array to contain the team inputs
const teamArray = [];

// Beginning manager prompts
const addManager = () => {
  return inquirer.prompt ([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of the team manager?',
      validate: nameInput => {
        if(nameInput) {
          return true;
        } else {
          console.log('Invalid. Please enter the name of the manager.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: 'Please enter the ID of the manager.',
      validate: nameInput => {
        if(nameInput) {
          return true;
        } else {
          console.log('Invalid. Please enter a valid work ID.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter the email of the manager.',
      validate: nameInput => {
        if(nameInput) {
          return true;
        } else {
          console.log('Invalid. Please enter a valid email.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: 'Please enter the office number of the manager.',
      validate: nameInput => {
        if(nameInput) {
          return true;
        } else {
          console.log('Invalid. Please enter a valid office number.');
          return false;
        }
      }
    }
  ]) // Adds the manager to the teamArray
  .then(managerInput => {
    const {name, id, email, officeNumber} = managerInput
    const manager = new Manager (name, id, email, officeNumber);

    teamArray.push(manager);
  })
};

// Beginning prompts for adding a new employee
const addEmployee = () => {
  console.log('Adding a new employee to the team');

  return inquirer.prompt ([
    {
      type: 'list',
      name: 'role',
      message: 'Choose a role for the new employee.',
      choices: ['Engineer', 'Intern']
    },
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of the employee?',
      validate: nameInput => {
        if(nameInput) {
          return true;
        } else {
          console.log('Invalid. Please enter the name of the employee.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: 'Please enter the ID of the employee.',
      validate: nameInput => {
        if(nameInput) {
          return true;
        } else {
          console.log('Invalid. Please enter a valid work ID.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter the email of the employee.',
      validate: nameInput => {
        if(nameInput) {
          return true;
        } else {
          console.log('Invalid. Please enter a valid email.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: 'Please enter the github of the employee.',
      when: (input) => input.role === 'Engineer',
      validate: nameInput => {
        if(nameInput) {
          return true;
        } else {
          console.log('Invalid. Please enter a valid github username.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'school',
      message: 'Please enter the school of the employee.',
      when: (input) => input.role === 'Intern',
      validate: nameInput => {
        if(nameInput) {
          return true;
        } else {
          console.log('Invalid. Please enter a valid school name.');
          return false;
        }
      }
    },
    {
      // Gives the user the iption to add a new team member or stop adding them
      type: 'confrim',
      name: 'confirmAddEmployee',
      message: 'Would you like to add more team members?',
      default: false
    }
  ])
  .then(teamData => {
    // the input data for each of the employee types
    if(teamData.role === "Engineer") {
      const {name, id, email, github} = teamData;
      const engineer = new Engineer (name, id, email, github);

      teamArray.push(engineer);
      console.log(engineer);
    } else {
      const {name, id, email, school} = teamData;
      const intern = new Inter (name, id, email, school);

      teamArray.push(intern);
      console.log(intern);
    }
    if(teamData.confirmAddEmplpoyee) {
      return addEmployee(teamArray);
    } else {
      return teamArray;
    }
  })
};

addManager().then(addEmployee)