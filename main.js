//computer generate randomly one of three choices
function computerPlay() {
  const option = ["rock", "paper", "scissor"];
  choice = Math.ceil(Math.random() * option.length) - 1;
  return option[choice];
}
console.log(computerPlay());
