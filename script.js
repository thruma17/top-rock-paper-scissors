console.clear();

/* DOM variables */
const roundWinnerMessage = document.getElementById("roundWinnerMessage");
const roundChoicesMessage = document.getElementById("roundChoicesMessage");
const playerScorePara = document.getElementById("playerScore");
const computerScorePara = document.getElementById("computerScore");
const playerWeapon = document.getElementById("playerWeapon");
const computerWeapon = document.getElementById("computerWeapon");
const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");

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
    roundWinner = `roundTie`;
  }
  if (
    (playerChoice === "SASSO" && computerChoice === "FORBICE") ||
    (playerChoice === "FORBICE" && computerChoice === "CARTA") ||
    (playerChoice === "CARTA" && computerChoice === "SASSO")
  ) {
    playerScore++;
    roundWinner = `roundWPlayer`;
  }
  if (
    (computerChoice === "SASSO" && playerChoice === "FORBICE") ||
    (computerChoice === "FORBICE" && playerChoice === "CARTA") ||
    (computerChoice === "CARTA" && playerChoice === "SASSO")
  ) {
    computerScore++;
    roundWinner = `roundWComputer`;
  }
  updateRoundWinner(roundWinner, playerChoice, computerChoice);
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

// adding event listeners to buttons

paperBtn.addEventListener(`click`, () => buttonClicked(`CARTA`));
scissorsBtn.addEventListener(`click`, () => buttonClicked(`FORBICE`));
rockBtn.addEventListener(`click`, () => buttonClicked(`SASSO`));

// remove event listeners when game is over

// creating function for game over

function gameOver() {
  // show game over message
  roundWinnerMessage.textContent = "Game over!";
  roundChoicesMessage.textContent = `Inizia una nuova partita`;

  // declare game winner
  if (playerScore === 5) {
    playerWeapon.src = "images/trophy.png";
    computerWeapon.src = "images/loser.png";
  } else {
    computerWeapon.src = "images/trophy.png";
    playerWeapon.src = "images/loser.png";
  }
}

// creating function to get player's choice

function buttonClicked(playerChoice) {
  if (playerScore === 5 || computerScore === 5) {
    gameOver();
  } else {
    computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);
    updateChoices(playerChoice, computerChoice);
    updateScore();
  }
}

// creating function to announce round winner

function updateRoundWinner(roundWinner, playerChoice, computerChoice) {
  switch (roundWinner) {
    case `roundTie`:
      roundWinnerMessage.textContent = "Pareggio! Prova ancora...";
      roundChoicesMessage.textContent = `Stessa arma`;
      break;
    case `roundWPlayer`:
      roundWinnerMessage.textContent = "Hai vinto il punto!";
      roundChoicesMessage.textContent = `${capitalizeFirstLetter(
        playerChoice
      )} batte ${computerChoice.toLowerCase()}`;
      break;
    case `roundWComputer`:
      roundWinnerMessage.textContent = "Hai perso il punto!";
      roundChoicesMessage.textContent = `${capitalizeFirstLetter(
        computerChoice
      )} batte ${playerChoice.toLowerCase()}`;
      break;
  }
}

// creating function to update round choices images

function updateChoices(playerChoice, computerChoice) {
  switch (playerChoice) {
    case "CARTA":
      playerWeapon.src = "images/paper.png";
      break;
    case "FORBICE":
      playerWeapon.src = "images/scissors.png";
      break;
    case "SASSO":
      playerWeapon.src = "images/rock.png";
      break;
  }
  switch (computerChoice) {
    case "CARTA":
      computerWeapon.src = "images/paper.png";
      break;
    case "FORBICE":
      computerWeapon.src = "images/scissors.png";
      break;
    case "SASSO":
      computerWeapon.src = "images/rock.png";
      break;
  }
}

// creating function to update score

function updateScore() {
  playerScorePara.textContent = `${playerScore}`;
  computerScorePara.textContent = `${computerScore}`;
}

/* ---------- Helper functions ---------- */

function random(options) {
  return Math.floor(Math.random() * options + 1);
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
