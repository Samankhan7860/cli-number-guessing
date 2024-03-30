#! /usr/bin/env node
import inquirer from "inquirer";

// 1) computer will generate a random number
// 2) User input for guessing number
// 3) Compare user input  with  computer generated number and show result

const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
  {
    name: "userGuessNumber",
    type: "number",
    message: "Please guess a number between 1-10:",
  },
]);

if (answers.userGuessNumber === randomNumber) {
  console.log("Congratulations! You guessed a correct number.");
} else {
  console.log("Sorry! You guessed wrong number.");
}
