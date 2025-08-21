// create function named getComputerChoice
// must return random string between: "rock" "paper" "scissors"
let randomNumber = Math.floor(Math.random() * 100) + 1;
let computerChoice1 = "rock";
let computerChoice2 = "paper";
let computerChoice3 = "scissors";

function getComputerChoice() {
  if (randomNumber >= 1 && randomNumber <= 33) {
    return computerChoice1;
  } else if (randomNumber >= 34 && randomNumber <= 66) {
    return computerChoice2;
  } else if (randomNumber >= 67 && randomNumber <= 99) {
    return computerChoice3;
  }
}

// console.log(randomNumber);

// console.log(getComputerChoice());
