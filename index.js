const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown.js")
const fs = require("fs")
// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = ["What is your GitHub username? "]
    // , "What is your email address? ", "What is your project's name? ", "Please write a short description of your project ", "What kind of license shoukd your project have? ", "What command should be run to install dependencies? ", "What command should be run to run tests? ", "What does the user need to know about using the repo? ", "What does the user need to know about contributing to the repo? "];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile("./README.md", data, err => {
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
    writeToFile("Hello", "Hello")
}

// Function call to initialize app
init();