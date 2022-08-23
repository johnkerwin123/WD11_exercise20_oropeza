const playerLabel = document.querySelector("#playerLabel");
const computerLabel = document.querySelector("#computerLabel");
const resultLabel = document.querySelector("#resultLabel");
const choiceBtns = document.querySelectorAll(".choiceBtn");

let player;
let computer;
let result;

choiceBtns.forEach(button => button.addEventListener("click", () => {

    player = button.textContent;
    computerTurn();
    playerLabel.textContent = `You picked: ${player}`;
    computerLabel.textContent = `Computer picked: ${computer}`;
    resultLabel.textContent = checkWinner();
}));

function computerTurn() {
  
 const randNum = Math.floor(Math.random() * 3) + 1;

 switch(randNum) {
    case 1:
      computer = "ROCK";
      break;
    case 2:
      computer = "PAPER";
      break;
    case 3:
      computer = "SCISSORS";
      break;
 }
}
function checkWinner() {
  if(player == computer){
    return "IT'S A DRAW!";
  }
  else if(computer == "ROCK"){
    return (player == "PAPER") ? "YOU WIN!" : "YOU LOSE!"
  }
  else if(computer == "PAPER"){
    return (player == "SCISSORS") ? "YOU WIN!" : "YOU LOSE!"
  }
  else if(computer == "SCISSORS"){
    return (player == "ROCK") ? "YOU WIN!" : "YOU LOSE!"
  }
}

