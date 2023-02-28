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
  
]).then((answers) => {
  // Generate README.md file
  const title = answers.title;
  const license = answers.license;
  const licenseBadge = getLicenseBadge(license);
  const description = answers.description;
  const installation = answers.installation;
  const usage = answers.usage;
  const contribution = answers.contribution;
  const tests = answers.tests;
  const github = answers.github;
  const email = answers.email;

  const readme = `# ${title}

${licenseBadge}

## Description

${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${installation}

## Usage

${usage}

## License

This project is licensed under the ${license} license.

## Contributing

${contribution}

## Tests

${tests}

## Questions

If you have any questions or comments about this project, please contact me at ${email}. You can also visit my [GitHub profile](https://github.com/${github}) for additional information and projects.`;

  // Write README.md file to disk
  fs.writeFile('README.md', readme, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('README.md file successfully generated!');
    }
  });
});
