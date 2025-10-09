console.clear();

// writing function to let player choose her/his name and rival's name

let playerName = ``;

function choosePlayerName() {
  playerName = prompt(`What's your name?\n`, ``);
}

// choosePlayerName(); ++++++++++

let computerName = `Computer`;

function chooseComputerName() {
  computerName = prompt(`Choose a name for the computer\n`, `Computer`);
}

// chooseComputerName(); ++++++++++

// creating function to get computer's choice

let computerChoice = ``;

function getComputerChoice() {
  let randomNumber = random(3);
  switch (randomNumber) {
    case 1:
      computerChoice = "ROCK";
      break;
    case 2:
      computerChoice = "PAPER";
      break;
    case 3:
      computerChoice = "SCISSORS";
      break;
    default:
      break;
  }
}

// creating variables for choice buttons

const rockBtn = document.getElementById(`rockBtn`);
const paperBtn = document.getElementById(`paperBtn`);
const scissorsBtn = document.getElementById(`scissorsBtn`);

// adding event listeners to buttons

rockBtn.addEventListener(`click`, () => buttonClicked(`ROCK`));
paperBtn.addEventListener(`click`, () => buttonClicked(`PAPER`));
scissorsBtn.addEventListener(`click`, () => buttonClicked(`SCISSORS`));

// creating function to get player's choice

function buttonClicked(playerChoice) {
  playRound(playerChoice, getComputerChoice());
  console.log(playerChoice);
  console.log(computerChoice);
}

// creating variables to keep track of score
// creating variables for round result

let playerScore = 0;
let computerScore = 0;

// writing function to play one round
// asks player to choose weapon
// declares the winner
// adds point to winner

function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return `Tie! Try again...`;
  }
  if (
    (playerChoice === "ROCK" && computerChoice === "SCISSORS") ||
    (playerChoice === "SCISSORS" && computerChoice === "PAPER") ||
    (playerChoice === "PAPER" && computerChoice === "ROCK")
  ) {
    playerScore++;
    return `You win, ${playerChoice.toLowerCase()} beats ${computerChoice.toLowerCase()}!`;
  }
  if (
    (computerChoice === "ROCK" && playerChoice === "SCISSORS") ||
    (computerChoice === "SCISSORS" && playerChoice === "PAPER") ||
    (computerChoice === "PAPER" && playerChoice === "ROCK")
  ) {
    computerScore++;
    return `You lose, ${computerChoice.toLowerCase()} beats ${playerChoice.toLowerCase()}!`;
  }
}

// writing function to play a game TO5

function playGame() {
  playRound(playerChoice, computerChoice);
  console.log(
    `Your score: ${playerScore}.\n\n${computerName} score: ${computerScore}\n`
  );
  if (playerScore < 5 && computerScore < 5) {
    playGame();
  } else {
    gameOver();
  }
}

/* Helper functions */

function random(options) {
  return Math.floor(Math.random() * options + 1);
}

//  if (playerScore > computerScore) {
//     console.log(`The winner is...\n\n...\n\n...${playerName.toUpperCase()}`);
//   } if () {
//     console.log(`The winner is...\n\n...\n\n...${computerName.toUpperCase()}`);
//   }
