const inquirer = require(`inquirer`);
const generateMarkdown = require(`./utils/generateMarkdown.js`);
const fs = require (`fs`);
// array of questions for user
const questions = [
    {
        type: `input`,
        name: `title`,
        message: `Enter your project title`
    },
    {
        type: `input`,
        name: `description`,
        message: `Enter a description for your application`
    },
    {
        type: `input`,
        name: `installationInstructions`,
        message: `Enter the installation instructions for your application`
    },
    {
        type: `input`,
        name: `usage`,
        message: `Enter instructions and examples as to the usage of your application`
    },
    {
        type: `input`,
        name: `contributionGuidelines`,
        message: `Enter the contribution guidelines for your application`
    },
    {
        type: `input`,
        name: `testInstructions`,
        message: `Enter the test instructions for your application`
    },
    {
        type: `list`,
        name: `license`,
        message: `Enter the license you intend to use for your application`,
        choices: [`MIT`, `Apache 2.0`, `MPL 2.0`, `GNU GPL v3`, `GNU AGPL v3`]

    },
    {
        type: `input`,
        name: `username`,
        message: `Enter your GitHub username`
    },
    {
        type: `input`,
        name: `email`,
        message: `Enter your email address`
    }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, error => {
        if (error) {
            console.log(error)
        }
    });
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers);
        const markDown = generateMarkdown(answers);
        writeToFile("readme_samples/README.md", markDown);
    })
    .catch (error => {
        if (error) {
            console.log(error);
        }
    });
}

// function call to initialize program
init();