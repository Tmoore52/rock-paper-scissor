let result;
let playerWins = 0;
let computerWins = 0;

function getComputerChoice() {
  if (Math.floor(Math.random() * 3) === 0) {
    return "rock";
  } else if (Math.floor(Math.random() * 3) === 1) {
    return "paper";
  } else {
    return "scissor";
  }
}

function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return result = 0;
  } else if (
    (playerChoice === "rock" && computerChoice === "scissor") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissor" && computerChoice === "paper")
  ) {
    return result = 1;
  } else if (
    (computerChoice === "rock" && playerChoice === "scissor") ||
    (computerChoice === "paper" && playerChoice === "rock") ||
    (computerChoice === "scissor" && playerChoice === "paper")
  ) {
    return result = 2;
  }
}

function game(playerWins, computerWins) {
  do {
    playerChoice = prompt("Pick Rock, Paper, or Scissor").toLowerCase();
    computerChoice = getComputerChoice();
    if (playRound(playerChoice, computerChoice)) {
      result = 1;
      console.log("Player wins!");
      return playerWins + 1;
    } else if (playRound(playerChoice, computerChoice)) {
      result = 2;
      console.log("Computer Wins");
      return computerWins + 1; 
    } else if (playRound(playerChoice, computerChoice)) {
      result = 0;
      return "Tie!";
    }
  } while (playerWins <= 5 || computerWins <= 5);
}

// console.log(playRound());
// console.log(player);
// console.log(computer);

console.log(game(0, 0));
