const inquirer = require('inquirer');
const fs = require('fs');

// Prompt user for information about their project
inquirer.prompt([
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please enter a description for your project:'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Please enter installation instructions for your project:'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please enter usage information for your project:'
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'Please enter contribution guidelines for your project:'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Please enter test instructions for your project:'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Which license does your project use?',
    choices: ['MIT', 'GPL', 'Apache', 'ISC', 'BSD 2-Clause', 'BSD 3-Clause', 'Unlicense', 'None']
  },  
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?'
  }
])