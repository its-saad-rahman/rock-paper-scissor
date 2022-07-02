//Global Variable
let playerScore = 0;
let computerScore = 0;
//computer generate randomly one of three choices
function computerPlay() {
  const option = ["rock", "paper", "scissor"];
  choice = Math.ceil(Math.random() * option.length) - 1;
  return option[choice];
}

//Check winner
function checkWinner() {
  playerScore >= computerScore
    ? console.log(`Player WINS`)
    : console.log(`Computer WINS`);
}
//a single round game
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `Its a TIE!!`;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  } else if (playerSelection === "paper" && computerSelection === "scissor") {
    computerScore++;
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  } else if (playerSelection === "scissor" && computerSelection === "rock") {
    computerScore++;
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  } else {
    playerScore++;
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  }
}

//player choice
function getPlayerInput() {
  const playerInput = prompt(
    "Please Enter one of you choice: Rock, Paper, Scissor",
  );
  let playerSelection = playerInput.toLowerCase();
  if (
    playerSelection === "rock" ||
    playerSelection === "paper" ||
    playerSelection === "scissor"
  ) {
    return playerSelection;
  } else {
    return "Please enter a valid choice";
  }
}
//console.log(getPlayerInput());
//game function

function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = getPlayerInput();
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    console.log(`Player: ${playerScore}, Computer: ${computerScore}`);
  }
  checkWinner();
}
game();
