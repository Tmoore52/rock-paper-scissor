function getComputerChoice() {
  if (Math.floor(Math.random() * 3) === 0) {
    return "rock";
  } else if (Math.floor(Math.random() * 3) === 1) {
    return "paper";
  } else {
    return "scissor";
  }
}

function playRound(playerSelection, computerSelection) {

  if (playerSelection === "rock" && computerSelection === "rock") {
    return "Tie";
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    return "Tie";
  } else if (playerSelection === "scissor" && computerSelection === "scissor") {
    return "Tie";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "Computer wins! Paper beats Rock!";
  } else if (playerSelection === "rock" && computerSelection === "scissor") {
    return "Player wins! Rock beats Scissors!";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "Player wins! Paper beats Rock!";
  } else if (playerSelection === "paper" && computerSelection === "scissor") {
    return "Computer wins! Scissors beats paper!";
  } else if (playerSelection === "scissor" && computerSelection === "rock") {
    return "Computer wins! Rock beats scissors!";
  } else if (playerSelection === "scissor" && computerSelection === "paper") {
    return "Player wins! Scissors beat paper!";
  }
}

const playerSelection = prompt("Pick Rock, Paper, or Scissors").toLowerCase();
const computerSelection = getComputerChoice();

function game() {
    for (let i = 0; i < 5; i++) {
        playRound(playerSelection, computerSelection)
        
    }

}

console.log(playerSelection)
console.log(computerSelection)
console.log(game());
