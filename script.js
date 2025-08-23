// console.clear();

// creating function to get the computer choice

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

// creating variables to keep track of score
// start value 0
// creating variables for round result

let playerScore = 0;
let computerScore = 0;
let win = `\nYou win`;
let lose = `\nYou lose`;
let tie = `\nTie`;

// writing function to play one round
// asks player to choose weapon
// declares the winner
// adds point to winner

function playRound(playerChoice, computerChoice) {
  if (playerChoice.toLowerCase() === computerChoice.slice(0, 1))
    return `${tie}! Try again...`;
  else if (playerChoice.toLowerCase() === `r`) {
    if (computerChoice === `paper`) {
      computerScore++;
      return `${lose}, paper beats rock!`;
    } else if (computerChoice === `scissors`) {
      playerScore++;
      return `${win}, rock beats scissors!`;
    }
  } else if (playerChoice.toLowerCase() === `p`) {
    if (computerChoice === `scissors`) {
      computerScore++;
      return `${lose}, scissors beat paper!`;
    } else if (computerChoice === `rock`) {
      playerScore++;
      return `${win}, paper beats scissors!`;
    }
  } else if (playerChoice.toLowerCase() === `s`) {
    if (computerChoice === `rock`) {
      computerScore++;
      return `\n${lose}, rock beats scissors!`;
    } else if (computerChoice === `paper`) {
      playerScore++;
      return `${win}, scissors beat rock!`;
    }
  } else return `\nYou need to choose a weapon`;
}

// declaring variable to keep track of rounds played
// writing function to play a game BO5

let moves = 0;

function playGame() {
  let playerChoice = prompt(
    `\nChoose you weapon:\n\nR for rock, P for paper, S for scissors\n`
  );
  const computerChoice = getComputerChoice();
  alert(playRound(playerChoice, computerChoice));
  alert(
    `\nYour score: ${playerScore}.\n\n${computerName} score: ${computerScore}\n`
  );
  moves++;
  if (moves < 5) {
    playGame();
  } else if (playerScore == computerScore) {
    playGame();
  } else {
    alert(`Game over!`);
  }
}

// writing function to let player choose her/his name and rival's name

let playerName = ``;

function choosePlayerName() {
  playerName = prompt(`\nWhat's your name?\n`, ``);
}

choosePlayerName();

let computerName = ``;

function chooseComputerName() {
  computerName = prompt(`\nChoose a name for the computer\n`, `Giggino`);
}

chooseComputerName();

// command to start the game

playGame();
