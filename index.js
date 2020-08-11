// array of questions for user
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "newREADME.md");
const render = require("./utils/generateMarkdown.js");



const promptUser = () => {
return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project?',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter the name of your project!');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please describe your project!');
                  return false;
                }
              }
          },
          {
            type: 'input',
            name: 'installation',
            message: 'Provide some instructions for installation (Required)',
            validate: installationInput => {
                if (installationInput) {
                  return true;
                } else {
                  console.log('Please provide installation instructions!');
                  return false;
                }
              }
          },
          {
            type: 'input',
            name: 'usage',
            message: 'Provide usage instructions for the project (Required)',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please add some usage instructions!');
                  return false;
                }
              }
          },
          {
            type: 'input',
            name: 'contributing',
            message: 'Please add some instructions for contributing (Required)',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please describe your project!');
                  return false;
                }
              }
          },
          {
            type: 'input',
            name: 'tests',
            message: 'Describe testing procedures.',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please describe testing procedures!');
                  return false;
                }
              }
          },
          {
            type: 'list',
            name: 'license',
            message: 'What license would you like to add?',
            choices: ['MIT', 'GPL']
        },
        {
          type: 'input',
          name: 'email',
          message: 'What is your email?',
          validate: emailInput => {
              if (emailInput) {
                return true;
              } else {
                console.log('Please enter your email!');
                return false;
              }
            }
        },
        {
          type: 'input',
          name: 'github',
          message: 'What is your GitHub username?',
          validate: githubInput => {
              if (githubInput) {
                return true;
              } else {
                console.log('Please describe your project!');
                return false;
              }
            }
        }  
])
.then(answerData => {
  
  console.log(answerData);
  writeToFile(answerData);

})
};
// function to write README file
function writeToFile(data) {
   if (!fs.existsSync(OUTPUT_DIR)) { fs.mkdirSync(OUTPUT_DIR) }
    fs.writeFileSync(outputPath, render(data), "utf-8");
     console.log("Your README was created! See newREADME.md!");
}

// function to initialize program
function init() {
  promptUser();
}

// function call to initialize program
init();
// I enter a description, installation instructions, usage information, contribution guidelines, and test instructions