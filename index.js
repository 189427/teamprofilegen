const inquirer = require("inquirer");
const fs = require("fs");

/* const genHTML = require("./src/HTMLgen.js");
const Engineer = require(".lib/Engineer");
const Intern = require(".lib/Intern");
const Manager = require(".lib/Manager"); */

const questionArray = [
  {
    type: "input",
    message: "Please type in your name:",
    name: "myName",
  },
  {
    type: "input",
    message: "Please type in your age:",
    name: "myAge",
  },
];

const init = async () => {
  try {
    const answers = await inquirer.prompt(questionArray);

    if (answers.myName) {
      console.log(answers.myName);
    }

    if (answers.myAge) {
      console.log(answers.myAge);
    }
  } catch (error) {
    console.error(error.message);
  }
};

init();
