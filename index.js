
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./Develop/utils/generateMarkdown");
const licenseBadge = require("./Develop/utils/licenseBadge").licenseBadge;
const questions = require("./Develop/utils/questions").questions;
const writeFileAsync = util.promisify(fs.writeFile);

async function init() {
  try {
    const answers = await inquirer.prompt(questions);
    answers.licenseBadge = licenseBadge(answers.license);
    let readMeData = generateMarkdown(answers);
    await writeFileAsync("README.md", readMeData);
  } catch (err) {
    throw err;
  }
}

init();