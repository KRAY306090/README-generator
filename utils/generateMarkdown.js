// function to generate markdown for README
function generateMarkdown(data) {
  return `
  ## https://img.shields.io/badge/<license>-<${generateBadge(data)}>-<blue>
  # ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents

  *[Installation](#installation)
  *[Usage](#usage)
  *[Contributing](#contributing)
  *[License](#license)
  *[Tests](#tests)
  *[Questions](#questions)

  ## Installation

  ${data.installation}


  ## Usage

  ${data.usage}


  ## Contributing 

  ${data.contributing}


  ## License 

  The license for this application is ${data.license}.


  ## Tests

  ${data.tests}


  ## Questions

  ${data.github} is the creator of this project.

  Any additional questions should be directed to ${data.email}. 


`;
}
 function generateBadge (data) {
   if (data.license === "MIT") {
      return "MIT";
   }
   else if (data.license === "GPL") {
     return "GPL";
   }

 }

module.exports = generateMarkdown;
