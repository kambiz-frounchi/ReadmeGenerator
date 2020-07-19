function determineBadge(license) {
  switch (license) {
    case `MIT`:
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    case `Apache 2.0`:
      return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    case `MPL 2.0`:
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
    case `GNU GPL v3`:
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
    case `GNU AGPL v3`:
      return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
    default:
      return "";
  }
}

// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

${determineBadge(data.license)}

## Description 

${data.description}

## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)

## Installation

${data.installationInstructions}

## Usage

${data.usage}

## License
Licensed under the ${data.license} license.

## Contributing
${data.contributionGuidelines}

## Tests
${data.testInstructions}

## Questions

My github username is @${data.username} and here is my [github profile](https://github.com/${data.username}). \n
Please direct all questions about this application to ${data.email}.
`;
}
  
  module.exports = generateMarkdown;