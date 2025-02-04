let computerScore = 0;
let playerScore = 0;
let playerChoice = ;
let computerChoice = ;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    if (choice === 1) {
        computerChoice = "Rock"
    } else if (choice ===2) {
        computerChoice = "Paper"
    } else {
        computerChoice = "Scissors"
    }
    return computerChoice
}

function getPlayerChoice() {
    playerChoice = prompt("Please enter rock, paper, or scissors.");
    
    playerChoice = playerChoice.toLowerCase();

    return playerChoice
}

function playRound(playerChoice, computerChoice) {

    if (playerChoice === computerChoice) {
        return "It's a tie!"
    } 


}

const playerSelection = getPlayerChoice();

const computerSelection = getComputerChoice();

playRound(playerSelection, computerSelection);