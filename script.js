console.clear();

// creating function to get the computer choice

const options = 3;
let randomNumber = Math.floor(Math.random() * options + 1);
const rock = `rock`;
const paper = `paper`;
const scissors = `scissors`;

function getComputerChoice() {
  if (randomNumber === 1) {
    return rock;
  } else if (randomNumber === 2) {
    return paper;
  } else if (randomNumber === 3) {
    return scissors;
  }
}

// creating function to get human choice

let userChoice = prompt(
  `Choose you weapon:\n\nR for rock, P for paper, S for scissors\n`,
  ``
);

userChoice = userChoice.toLowerCase();

function getHumanChoice() {
  if (userChoice === `rock` || userChoice === `r`) {
    return rock;
  } else if (userChoice === `paper` || userChoice === `p`) {
    return paper;
  } else if (userChoice === `scissors` || userChoice === `s`) {
    return scissors;
  }
}

console.log(`random number: ${randomNumber}`);
console.log(`computer chose ${getComputerChoice()}`);
console.log(`you chose ${getHumanChoice()}`);

// creating variables humanScore and computerScore
// start value 0

let humanScore = 0;
let computerScore = 0;
let roundWinner = ``;

// writing function that declares the winner

let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();

function playRound() {
  if (computerChoice === humanChoice) {
    return (roundWinner = `Tie`);
  } else if (
    (computerChoice === `rock` && humanChoice === `scissors`) ||
    (computerChoice === `scissors` && humanChoice === `paper`) ||
    (computerChoice === `paper` && humanChoice === `rock`)
  ) {
    return (roundWinner = `You lose`);
  } else if (
    (humanChoice === `rock` && computerChoice === `scissors`) ||
    (humanChoice === `scissors` && computerChoice === `paper`) ||
    (humanChoice === `paper` && computerChoice === `rock`)
  ) {
    return (roundWinner = `You win`);
  } else {
    return (roundWinner = `No weapon selected`);
  }
}

function updateScore() {
  if (roundWinner === `You lose`) {
    return computerScore++;
  } else if (roundWinner === `You win`) {
    return humanScore++;
  }
}

playRound();
updateScore();

alert(`${roundWinner}!\n\nComputer: ${computerScore}. You: ${humanScore}`);
