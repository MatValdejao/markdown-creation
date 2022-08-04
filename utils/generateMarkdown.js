// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "None") {
    return ""
  } else {
    return `![License](https://img.shields.io/badge/License-${license}-yellow.svg)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "None") {
		return "";
	} else {
		return `* [License](#license)`;
	}
}

function renderLicenseSection(license) {
  if (license === "None") {
    return ""
  } else {
    return `## License
  This project os licensed under the ${license} license.
    `
  }
}

function checkDemo(demo) {
  if (demo) {
    return `Link to demo video: ${demo}`
  } else {
    return ""
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}

  ${checkDemo(data.demo)}

  ## Table of Contents
   * [Installation](#installation)
   * [Usage](#usage)
   ${renderLicenseLink(data.license)}
   * [Contributing](#contributing)
   * [Tests](#tests)
   * [Questions](#questions)
  
  ## Installation
  To install necessary dependencies run the following command:

    ${data.dependencies}

  ## Usage
  ${data.know}

  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contribution}

  ## Tests
    ${data.command}

  ## Questions
  If you have any questions about the repo, contact me at [${data.github}](https://github.com/${data.github}) or by email: [${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
