const licenseOptions = ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
const licenseBadge = [
	"https://img.shields.io/badge/License-MIT-yellow.svg",
	"https://img.shields.io/badge/License-Apache_2.0-blue.svg",
	"https://img.shields.io/badge/License-GPLv3-blue.svg",
	"https://img.shields.io/badge/License-BSD_3--Clause-blue.svg", ""
];
const licenseLinks = [
	"https://opensource.org/licenses/MIT",
	"https://opensource.org/licenses/Apache-2.0",
	"https://www.gnu.org/licenses/gpl-3.0",
  "https://opensource.org/licenses/BSD-3-Clause",
  ""
];

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  for (var i = 0; i < licenseLinks.length; i++) {
    if (license === licenseOptions[i]) {
      badge = licenseBadge[i]
      return badge;
    }
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  for (var i = 0; i < licenseLinks.length; i++) {
    if (license === licenseOptions[i]) {
      link = licenseLinks[i]
      return link;
    }
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
  [![License](${renderLicenseBadge(data.license)})](${renderLicenseLink(
		data.license
	)})
  ## Description
  ${data.description}
  ${checkDemo(data.demo)}

  ## Table of Contents
   * [Installation](#installation)
   * [Usage](#usage)
   * [License](#license)
   * [Contributing](#contributing)
   * [Tests](#tests)
   * [Questions](#questions)
  
  ## Installation
  To install necessary dependencies run the following command:

    ${data.dependencies}

  ## Usage
  ${data.know}

  ## License
  This project os licensed under the ${
		data.license
	} license: [![License](${renderLicenseBadge(
		data.license
	)})](${renderLicenseLink(data.license)})

  ## Contributing
  ${data.contribution}

  ## Tests
    ${data.command}

  ## Questions
  If you have any questions about the repo, contact me at [${data.github}](https://github.com/${data.github}) or by email: [${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
