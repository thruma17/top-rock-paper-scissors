console.clear();

// create function named getComputerChoice
// must return random string between: 'rock' 'paper' 'scissors'

let randomNumber = Math.floor(Math.random() * 100) + 1;
let choice1 = `rock`;
let choice2 = `paper`;
let choice3 = `scissors`;

function getComputerChoice() {
  if (randomNumber >= 1 && randomNumber <= 33) {
    return choice1;
  } else if (randomNumber >= 34 && randomNumber <= 66) {
    return choice2;
  } else if (randomNumber >= 67 && randomNumber <= 99) {
    return choice3;
  }
}

computerChoice = getComputerChoice();

// create function getHumanChoice
// getHumanChoice() returns rock paper or scissors

let userChoice = prompt(`rock, paper or scissors?`, ``);

userChoice = userChoice.toLowerCase();

function getHumanChoice() {
  if (userChoice === `rock`) {
    return choice1;
  } else if (userChoice === `paper`) {
    return choice2;
  } else if (userChoice === `scissors`) {
    return choice3;
  }
}

humanChoice = getHumanChoice();

// create variables humanScore and computerScore
// start value 0

const humanScore = 0;
const computerScore = 0;

// write a function that chooses the winner
// how? rock beats scissors, scissors beats paper, paper beats rock
// who wins gets a point

const youLose = `You lose!`;
const youWin = `You win!`;
const rockScissors = `Rock beats scissors`;
const scissorsPaper = `Scissors beats paper`;
const paperRock = `Paper beats rock`;
const tie = `That's a tie`;

function playRound() {
  if (computerChoice == choice1 && humanChoice == choice3) {
    return `${youLose} ${rockScissors}`;
  } else if (computerChoice == choice3 && humanChoice == choice2) {
    return `${youLose} ${scissorsPaper}`;
  } else if (computerChoice == choice2 && humanChoice == choice1) {
    return `${youLose} ${paperRock}`;
  } else if (humanChoice == choice1 && computerChoice == choice3) {
    return `${youWin} ${rockScissors}`;
  } else if (humanChoice == choice3 && computerChoice == choice2) {
    return `${youWin} ${scissorsPaper}`;
  } else if (humanChoice == choice2 && computerChoice == choice1) {
    return `${youWin} ${paperRock}`;
  } else {
    return tie;
  }
}

const winnerComputer = youLose;
const winnerHuman = youWin;

// console.log(randomNumber);
console.log(computerChoice);
console.log(humanChoice);

alert(playRound());
