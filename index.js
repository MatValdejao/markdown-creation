const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown.js")
const fs = require("fs")
// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = ["What is your GitHub username? "]
    // , "What is your email address? ", "What is your project's name? ", "Please write a short description of your project ", "What kind of license shoukd your project have? ", "What command should be run to install dependencies? ", "What command should be run to run tests? ", "What does the user need to know about using the repo? ", "What does the user need to know about contributing to the repo? "];

const promptUser = () => {
    return inquirer.prompt([
		{
			type: "input",
			name: "github",
			message: questions[0],
		},
		{
			type: "input",
			name: "email",
			message: questions[1],
        },
        {
            type: "input",
            name: "title",
            message: questions[2]
        }
		{
			type: "input",
			name: "description",
			message: questions[3],
		},
		{
			type: "checkbox",
			name: "license",
			message: questions[4],
			choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
		},
		{
			type: "input",
			name: "dependencies",
			message: questions[5],
		},
		{
			type: "input",
			name: "command",
			message: questions[6],
        },
        {
            type: "input",
            name: "know",
            message: questions[7],
        },
        {
            type: "input",
            name: "contribution",
            message: questions[8],
        }
	]);
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(`./${fileName}`, data, err => {
            if (err) {
                reject(err)
                return
            }

            resolve({
                ok: true, 
                message: "README created!"
            })
        })
    })
}

// TODO: Create a function to initialize app
function init() {
    writeToFile("README.md", "Hello")
}

// Function call to initialize app
init();
