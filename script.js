// create function named getComputerChoice
// must return random string between: 'rock' 'paper' 'scissors'
let randomNumber = Math.floor(Math.random() * 100) + 1;
let choice1 = "rock";
let choice2 = "paper";
let choice3 = "scissors";

function getComputerChoice() {
  if (randomNumber >= 1 && randomNumber <= 33) {
    return choice1;
  } else if (randomNumber >= 34 && randomNumber <= 66) {
    return choice2;
  } else if (randomNumber >= 67 && randomNumber <= 99) {
    return choice3;
  }
}

// console.log(randomNumber);

// console.log(getComputerChoice());

// create function getHumanChoice
// getHumanChoice() returns rock paper or scissors

let humanChoice = prompt("rock, paper or scissors?", "");

function getHumanChoice() {
  if (humanChoice === "rock") {
    return choice1;
  } else if (humanChoice === "paper") {
    return choice2;
  } else if (humanChoice === "scissors") {
    return choice3;
  }
}

console.log(getHumanChoice());
