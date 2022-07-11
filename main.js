//Global Variable
let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('button[data-choice]');
const gameStatus = document.querySelector('.game-status');
const robotCurrentScore = document.querySelector('.robot-score');
const playerCurrentScore = document.querySelector('.player-score');
const resetBtn = document.querySelector('.reset');

//computer generate randomly one of three choices
function computerPlay() {
  const option = ['rock', 'paper', 'scissor'];
  choice = Math.ceil(Math.random() * option.length) - 1;
  return option[choice];
}

//Check round winner
function checkRoundWinner() {
  playerScore >= computerScore
    ? (gameStatus.textContent = `Player WINS`)
    : (gameStatus.textContent = `Robot WINS`);
}
//Check game winner
function checkGameWinner() {
  if (computerScore === 5) {
    gameStatus.textContent = 'You lose!!! Robot beats Human';
  } else if (playerScore === 5) {
    gameStatus.textContent = 'You Win!!! Human beats Robot';
  }
}

//a single round game
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    computerScore++;
  } else if (playerSelection === 'paper' && computerSelection === 'scissor') {
    computerScore++;
  } else if (playerSelection === 'scissor' && computerSelection === 'rock') {
    computerScore++;
  } else {
    playerScore++;
  }
}

//game function
function game(e) {
  let playerSelection = e.target.dataset.choice;
  let computerSelection = computerPlay();

  playRound(playerSelection, computerSelection);
  updateScoreBoard();
  checkRoundWinner();
  checkGameWinner();
}

//generate random win quote
function winQuote() {}

//generate random lose quote
function loseQuote() {}

//display final result
function finlaResult() {
  const modal = document.createElement('div');
  const heading = document.createElement('h2');
  modal.style.width = `400px`;
  modal.style.height = `400px`;
  heading.appendChild(heading);
}

//Updating game score board
function updateScoreBoard() {
  playerCurrentScore.textContent = playerScore;
  robotCurrentScore.textContent = computerScore;
}

//Restart the game
function restart() {
  playerScore = 0;
  computerScore = 0;
  playerCurrentScore.textContent = 0;
  robotCurrentScore.textContent = 0;
}

//All Event Listener
buttons.forEach((button) => button.addEventListener('click', game));
resetBtn.addEventListener('click', restart);
