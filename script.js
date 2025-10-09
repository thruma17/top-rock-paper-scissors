console.clear();

// creating function to get computer's choice

const computerChoice = getComputerChoice();

function getComputerChoice() {
  const options = 3;
  let randomNumber = Math.floor(Math.random() * options + 1);
  switch (randomNumber) {
    case 1:
      return "ROCK";
    case 2:
      return "PAPER";
    case 3:
      return "SCISSORS";
  }
}

// creating functions to get player's choice

// creating variables for choice buttons

const rockBtn = document.getElementById(`rockBtn`);
const paperBtn = document.getElementById(`paperBtn`);
const scissorsBtn = document.getElementById(`scissorsBtn`);

// adding event listeners to buttons

rockBtn.addEventListener(`click`, getPlayerChoice);
paperBtn.addEventListener(`click`, getPlayerChoice);
scissorsBtn.addEventListener(`click`, getPlayerChoice);

// creating variables to keep track of score
// creating variables for round result

let playerScore = 0;
let computerScore = 0;
let win = `You win, ${playerChoice.toLowerCase()} beats ${computerChoice.toLowerCase()}!`;
let lose = `You lose, ${computerChoice.toLowerCase()} beats ${playerChoice.toLowerCase()}!`;
let tie = `Tie! Try again...`;

// writing function to play one round
// asks player to choose weapon
// declares the winner
// adds point to winner

function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return `${tie}`;
  }
  if (
    (playerChoice === "ROCK" && computerChoice === "SCISSORS") ||
    (playerChoice === "SCISSORS" && computerChoice === "PAPER") ||
    (playerChoice === "PAPER" && computerChoice === "ROCK")
  ) {
    playerScore++;
    return `${win}`;
  }
  if (
    (computerChoice === "ROCK" && playerChoice === "SCISSORS") ||
    (computerChoice === "SCISSORS" && playerChoice === "PAPER") ||
    (computerChoice === "PAPER" && playerChoice === "ROCK")
  ) {
    computerScore++;
    return `${lose}`;
  }
}

// writing function to play a game BO5

let moves = 0;

function playGame() {
  console.log(playRound());
  console.log(
    `Your score: ${playerScore}.\n\n${computerName} score: ${computerScore}\n`
  );
  moves++;
  if (moves < /*5*/ 1) {
    playGame();
  } else if (playerScore == computerScore) {
    // playGame();
    console.log(`ERROR`);
  } else if (playerScore > computerScore) {
    console.log(winnerPlayer);
  } else {
    console.log(winnerComputer);
  }
}

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

// winner declaration

let winnerPlayer = `The winner is...\n\n...\n\n...${playerName.toUpperCase()}`;

let winnerComputer = `The winner is...\n\n...\n\n...${computerName.toUpperCase()}`;

// command to start the game

playGame();
