let result = 0;
let playerWins = 0;
let computerWins = 0;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");

function getComputerChoice() {
  if (Math.floor(Math.random() * 3) === 0) {
    return "rock";
  } else if (Math.floor(Math.random() * 3) === 1) {
    return "paper";
  } else {
    return "scissor";
  }
};

function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return (result = "tie");
  } else if (
    (playerChoice === "rock" && computerChoice === "scissor") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissor" && computerChoice === "paper")
  ) {
    return (result = "player");
  } else if (
    (computerChoice === "rock" && playerChoice === "scissor") ||
    (computerChoice === "paper" && playerChoice === "rock") ||
    (computerChoice === "scissor" && playerChoice === "paper")
  ) {
    return (result = "computer");
  }
  console.log(result);
}

rock.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
  console.log(getComputerChoice());
  console.log(result);
});

paper.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
  console.log(result);
});

scissor.addEventListener("click", () => {
  playRound("scissor", getComputerChoice());
  console.log(result);
});

/*
function game(playerWins, computerWins) {
  do {
    playerChoice = prompt("Pick Rock, Paper, or Scissor").toLowerCase();
    computerChoice = getComputerChoice();
    console.log(playerChoice);
    console.log(computerChoice);
    // console.log(result);
    playRound(playerChoice, computerChoice);
    if (result === "player") {
      console.log("Player wins!");
      playerWins++;
      console.log(playerWins);
    } else if (result === "computer") {
      console.log("Computer Wins");
      computerWins++;
      console.log(computerWins);
    } else if (result === "tie") {
      console.log("Tie!");
    }
  } while (playerWins < 5 && computerWins < 5)
  {
    if (computerWins === 5) {
      return "Computer wins the match! Refresh to start again";
    } else if (playerWins === 5) {
      return "Player wins the match! Refresh to start again";
    }
  }
}

console.log(game(0, 0));
*/
