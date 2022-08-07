function getComputerChoice() {
    if (Math.floor(Math.random()*3) === 0) {
        console.log("Rock");
    } else if (Math.floor(Math.random()*3) === 1) {
        console.log("Paper");
    } else {
        console.log("Scissor");
    }
}

function playRound(playerSelection, computerSelection) {

}

const playerSelection = prompt("Pick Rock, Paper, or Scissors")
getComputerChoice();