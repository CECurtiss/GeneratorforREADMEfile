const fs = require('fs');
const inquirer = require('inquirer');
function renderLicenseLink(license) {
   switch(license) {
    case 'Apache':
      "https://www.apache.org/licenses/LICENSE-2.0.txt";
      break;
    case 'MIT':
    "https://www.mit.edu/~amini/LICENSE.md";
    break;
    case 'GPL':
    "https://www.gnu.org/licenses/gpl-3.0.txt";
    break;
    case 'BSD':
    "https://www.freebsd.org/copyright/freebsd-license/";
    break;
   }};
inquirer
    .prompt([
        {
            type: 'input',
            message: "Enter the Title of your README:",
            name: 'readmetitle',
        },
        {
            type: 'input',
            message: "Enter a short description:",
            name: 'description',
        },
        {
            type: 'input',
            message: 'What are the steps required to install your project?',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'What are some examples for use of this project?',
            name: 'usage',
        },
        {
            type: 'list',
            message: 'Which type of license are you using?',
            name: 'license',
            choices: ['MIT', 'Apache', 'GPL', 'BSD'],
        },
        {
            type: 'input',
            message: 'How can other developers contribute to your project?',
            name: 'contributing',
        },
        {
            type: 'input',
            message: 'What tests methods can be performed with your code examples?',
            name: "tests",
        },
        {
            type: 'input',
            message: 'Please enter your contact information if you would like to be available for questions from other developers about your project:',
            name: 'questions',
        },
        {
            type: 'input',
            message: 'What is your Github username?',
            name: 'githubname',
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
        },
    ])
    .then((data) => {
       const answers = 
`# ${data.readmetitle}

## Description
${data.description}
       
## Table of Contents
       
*[Installation](#installation)

*[Usage](#usage)

*[License](#license)

*[Contributing](#contributing)

*[Tests](#tests)

*[Questions](#questions)
       
## Installation
${data.installation}
       
## Usage
${data.usage}
       
## License
${renderLicenseLink(data.license)}
       
## Contributing
${data.contributing}
       
## Tests
${data.tests}
       
## Questions

[My Github profile](http://github.com/${data.githubname}). 

Please feel free to [email me](mailto:${data.email}) if you have any futher questions.
${data.questions}.`
;
       
        fs.appendFile('README.md', answers, (err) =>
        err ? console.error(err) : console.log("README file created!")
        );
    });
