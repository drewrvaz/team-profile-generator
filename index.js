// Team profiles
const Employee = require('../lib/employee');
const Manager = require('../lib/manager');
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');

// Required Node modules
const fs = require('fs');
const inquirer = require('inquirer'); 
const generatePage = require

// Beginning user prompts
const userPrompt = () => {
  return inquirer.prompt ([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
      validate: nameInput => {
        if(nameInput) {
          return true;
        } else {
          console.log('Invalid. Please enter your name.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is your ID?',
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
      message: 'What is your email?',
      validate: nameInput => {
        if(nameInput) {
          return true;
        } else {
          console.log('Invalid. Please enter your work email.');
          return false;
        }
      }
    },
    
  ])
}