console.clear();

// creating function to get computer's choice

function getComputerChoice() {
  const options = 3;
  let randomNumber = Math.floor(Math.random() * options + 1);
  if (randomNumber === 1) {
    return `rock`;
  } else if (randomNumber === 2) {
    return `paper`;
  } else if (randomNumber === 3) {
    return `scissors`;
  }
}

// creating function to get player's choice

// creating variables for choice buttons

const rockBtn = document.getElementById(`rockBtn`);
const paperBtn = document.getElementById(`paperBtn`);
const scissorsBtn = document.getElementById(`scissorsBtn`);

// creating variables to keep track of score
// creating variables for round result

let playerScore = 0;
let computerScore = 0;
let win = `You win`;
let lose = `You lose`;
let tie = `Tie`;

// writing function to play one round
// asks player to choose weapon
// declares the winner
// adds point to winner

function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice.slice(0, 1))
    return `${tie}! Try again...`;
  else if (playerChoice === `r`) {
    if (computerChoice === `paper`) {
      computerScore++;
      return `${lose}, paper beats rock!`;
    } else if (computerChoice === `scissors`) {
      playerScore++;
      return `${win}, rock beats scissors!`;
    }
  } else if (playerChoice === `p`) {
    if (computerChoice === `scissors`) {
      computerScore++;
      return `${lose}, scissors beat paper!`;
    } else if (computerChoice === `rock`) {
      playerScore++;
      return `${win}, paper beats rock!`;
    }
  } else if (playerChoice === `s`) {
    if (computerChoice === `rock`) {
      computerScore++;
      return `${lose}, rock beats scissors!`;
    } else if (computerChoice === `paper`) {
      playerScore++;
      return `${win}, scissors beat paper!`;
    }
  } else return `You need to choose a weapon`;
}

// writing function to play a game BO5

let moves = 0;

let playerChoice = getPlayerChoice();

const computerChoice = getComputerChoice();

function playGame() {
  console.log(playRound(playerChoice, computerChoice));
  console.log(
    `Your score: ${playerScore}.\n\n${computerName} score: ${computerScore}\n`
  );
  moves++;
  if (moves < /*5*/ 1) {
    playGame();
  } else if (playerScore == computerScore) {
    playGame();
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

let computerName = ``;

function chooseComputerName() {
  computerName = prompt(`Choose a name for the computer\n`, `Giggino`);
}

// chooseComputerName(); ++++++++++

// winner declaration

let winnerPlayer = `The winner iiis...\n\n...\n\n...${playerName.toUpperCase()}`;

let winnerComputer = `The winner iiis...\n\n...\n\n...${computerName.toUpperCase()}`;

// command to start the game

playGame();
