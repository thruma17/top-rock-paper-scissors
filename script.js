console.clear();

// creating variables to keep track of score
// creating variables for round result

let playerScore = 0;
let computerScore = 0;
let roundWinner = ``;

// writing function to play one round
// asks player to choose weapon
// declares the winner
// adds point to winner

function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    roundWinner = `Pareggio! Prova ancora...`;
  }
  if (
    (playerChoice === "SASSO" && computerChoice === "FORBICE") ||
    (playerChoice === "FORBICE" && computerChoice === "CARTA") ||
    (playerChoice === "CARTA" && computerChoice === "SASSO")
  ) {
    playerScore++;
    roundWinner = `Hai vinto, ${playerChoice.toLowerCase()} batte ${computerChoice.toLowerCase()}!`;
  }
  if (
    (computerChoice === "SASSO" && playerChoice === "FORBICE") ||
    (computerChoice === "FORBICE" && playerChoice === "CARTA") ||
    (computerChoice === "CARTA" && playerChoice === "SASSO")
  ) {
    computerScore++;
    roundWinner = `Hai perso, ${computerChoice.toLowerCase()} batte ${playerChoice.toLowerCase()}!`;
  }
  console.log(roundWinner);
  console.log(playerScore);
  console.log(computerScore);
  updateScore();
}

// creating function to get computer's choice

function getComputerChoice() {
  let randomNumber = random(3);
  switch (randomNumber) {
    case 1:
      return "CARTA";
    case 2:
      return "FORBICE";
    case 3:
      return "SASSO";
  }
}

// creating variables for choice buttons

const rockBtn = document.getElementById(`rockBtn`);
const paperBtn = document.getElementById(`paperBtn`);
const scissorsBtn = document.getElementById(`scissorsBtn`);

// adding event listeners to buttons

paperBtn.addEventListener(`click`, () => buttonClicked(`CARTA`));
scissorsBtn.addEventListener(`click`, () => buttonClicked(`FORBICE`));
rockBtn.addEventListener(`click`, () => buttonClicked(`SASSO`));

// creating function to get player's choice

function buttonClicked(playerChoice) {
  if (playerScore < 5 && computerScore < 5) {
    computerChoice = getComputerChoice();
    console.log(`Player: ${playerChoice}`);
    console.log(`Computer: ${computerChoice}`);
    playRound(playerChoice, computerChoice);
  } else {
    console.log(`Game Over!`);
  }
}

// creating function to update score

const playerScorePara = document.getElementById("playerScore");
const computerScorePara = document.getElementById("computerScore");

function updateScore() {
  switch (roundWinner) {
    case `tie`:
      return (scoreInfo.textContent = "Pareggio!");
    case `player`:
      return (scoreInfo.textContent = "Hai vinto!");
    case `computer`:
      return (scoreInfo.textContent = "Hai perso!");
  }

  playerScorePara.textContent = `${playerScore}`;
  computerScorePara.textContent = `${computerScore}`;
}

// writing function to play a game TO5

// function playGame() {
//   playRound(playerChoice, computerChoice);
//   console.log(
//     `Your score: ${playerScore}.\n\nComputer score: ${computerScore}\n`
//   );
//   if (playerScore < 5 && computerScore < 5) {
//     playGame();
//   } else {
//     gameOver();
//   }
// }

/* Helper functions */

function random(options) {
  return Math.floor(Math.random() * options + 1);
}

//  if (playerScore > computerScore) {
//     console.log(`The winner is...\n\n...\n\n...you}`);
//   } if () {
//     console.log(`The winner is...\n\n...\n\n...computer`);
//   }
