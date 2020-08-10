// array of questions for user
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");

//const OUTPUT_DIR = path.resolve(_dirname, "output");
//const outputPath = path.join(OUTPUT_DIR, "newREADME.md");
//const render = require("./utils/generateMarkdown.js");



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
          }
])
.then(answerData => {
  
  console.log(answerData);

})
};
// function to write README file
function writeToFile(fileName, data) {
  // if (!fs.existsSync(OUTPUT_DIR)) { fs.mkdirSync(OUTPUT_DIR) }
  //   fs.writeFileSync(outputPath, render(data), "utf-8");
  //   console.log("Your README was created! See newREADME.md!");
}

// function to initialize program
function init() {
  promptUser();
}

// function call to initialize program
init();
