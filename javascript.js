let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0: return "rock";
        break;

        case 1: return "paper";
        break;

        case 2: return "scissors";
        break;
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Please choose rock, paper, or scissors.")

    if (humanChoice.toLowerCase() === 'rock' || humanChoice.toLowerCase() === 'paper' || humanChoice.toLowerCase() === 'scissors') {
        return humanChoice.toLowerCase();
    } else {
        alert("Invalid entry. Please try again");
    }
}

function playRound(humanSelection, computerSelection) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!")
    } else if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            computerScore ++;
            console.log("Computer wins this round!");
        } else if (computerChoice === "scissors") {
            humanScore ++;
            console.log("Human wins this round!");
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            humanScore ++;
            console.log("Human wins this round!");
        } else if (computerChoice === "scissors") {
            computerScore ++;
            console.log("Computer wins this round!");
        }
    else if (humanChoice === "scissors");
        if (computerChoice === "rock") {
            humanScore ++;
            console.log("Computer wins this round!")
        } else if (computerChoice === "paper") {
            humanScore ++;
            console.log("Human wins this round!"); 
        }
    }
}