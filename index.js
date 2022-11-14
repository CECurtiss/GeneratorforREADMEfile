const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
// Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
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
            name: 'questions'
        },
    ])
const questions = [
    ];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
