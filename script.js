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
    roundWinner = `Tie! Try again...`;
  }
  if (
    (playerChoice === "ROCK" && computerChoice === "SCISSORS") ||
    (playerChoice === "SCISSORS" && computerChoice === "PAPER") ||
    (playerChoice === "PAPER" && computerChoice === "ROCK")
  ) {
    playerScore++;
    roundWinner = `You win, ${playerChoice.toLowerCase()} beats ${computerChoice.toLowerCase()}!`;
  }
  if (
    (computerChoice === "ROCK" && playerChoice === "SCISSORS") ||
    (computerChoice === "SCISSORS" && playerChoice === "PAPER") ||
    (computerChoice === "PAPER" && playerChoice === "ROCK")
  ) {
    computerScore++;
    roundWinner = `You lose, ${computerChoice.toLowerCase()} beats ${playerChoice.toLowerCase()}!`;
  }
  console.log(roundWinner);
  console.log(playerScore);
  console.log(computerScore);
}

// creating function to get computer's choice

function getComputerChoice() {
  let randomNumber = random(3);
  switch (randomNumber) {
    case 1:
      return "ROCK";
    case 2:
      return "PAPER";
    case 3:
      return "SCISSORS";
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
  if (playerScore < 5 && computerScore < 5) {
    computerChoice = getComputerChoice();
    console.log(`Player: ${playerChoice}`);
    console.log(`Computer: ${computerChoice}`);
    playRound(playerChoice, computerChoice);
  } else {
    console.log(`Game Over!`);
  }
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
