//Global Variable
let round = 1;
let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('button[data-choice]');
const gameStatus = document.querySelector('.game-status');
const robotCurrentScore = document.querySelector('.robot-score');
const playerCurrentScore = document.querySelector('.player-score');
const currentRound = document.querySelector('.current-round');
const resetBtn = document.querySelector('.reset');
const modal = document.querySelector('.modal');
const modalText = document.createElement('div');
const playAgain = document.querySelector('.play-again');
const iTag = document.createElement('i');
const pTag = document.createElement('p');

//computer generate randomly one of three choices
function computerPlay() {
  const option = ['rock', 'paper', 'scissor'];
  choice = Math.ceil(Math.random() * option.length) - 1;
  return option[choice];
}

//Check game winner
function checkGameWinner() {
  if (computerScore === 5) {
    pTag.textContent = `You Lost the game`;
    modalText.classList.add('modal-text');
    modalText.appendChild(pTag);
    modal.appendChild(modalText);
    modal.classList.add('modal-tranform');
    modal.insertBefore(modalText, playAgain);
    modal.style.border = `2px solid red`;
    loseSound();
  } else if (playerScore === 5) {
    pTag.textContent = `You Win the game`;
    modalText.classList.add('modal-text');
    modalText.appendChild(pTag);
    modal.insertBefore(modalText, playAgain);
    modal.classList.add('modal-tranform');
    modal.style.border = `2px solid green`;
    winSound();
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

//Round Counter
function roundCount() {
  round += 1;
  currentRound.textContent = round;
}

//game function
function game(e) {
  let playerSelection = e.target.dataset.choice;
  let computerSelection = computerPlay();

  playRound(playerSelection, computerSelection);
  updateScoreBoard();
  //checkRoundWinner();
  checkGameWinner();
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
  round = 1;
  playerCurrentScore.textContent = 0;
  robotCurrentScore.textContent = 0;
  currentRound.textContent = 1;
  gameStatus.textContent = '';
}

//New Game
function newGame() {
  modal.classList.remove('modal-tranform');
  restart();
  modalText.remove();
  // iTag.remove();
  // pTag.remove();
}

function winSound() {
  const audio = document.querySelector('audio[data-audio="win"');
  audio.currentTime = 0;
  audio.play();
}
function loseSound() {
  const audio = document.querySelector('audio[data-audio="lose"');
  audio.currentTime = 0;
  audio.play();
}
//All Event Listener
buttons.forEach((button) => button.addEventListener('click', game));
buttons.forEach((button) => button.addEventListener('click', roundCount));
playAgain.addEventListener('click', newGame);
resetBtn.addEventListener('click', restart);
