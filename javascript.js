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

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice) {
        console.log(`The human chose ${humanChoice} and the computer chose ${computerChoice}.`)
        if (humanChoice === computerChoice) {
            console.log("It's a tie!")
        } else if (humanChoice === "rock") {
            if (computerChoice === "paper") {
                console.log("Computer wins this round!");
                computerScore ++;
            } else if (computerChoice === "scissors") {
                console.log("Human wins this round!");
                humanScore ++;
            }
        } else if (humanChoice === "paper") {
            if (computerChoice === "rock") {
                console.log("Human wins this round!");
                humanScore ++;
            } else if (computerChoice === "scissors") {
                console.log("Computer wins this round!");
                computerScore ++;
            }
        } else if (humanChoice === "scissors") {
            if (computerChoice === "rock") {
                console.log("Computer wins this round!")
                computerScore ++;
            } else if (computerChoice === "paper") {
                console.log("Human wins this round!"); 
                humanScore ++;
            }
        }
    }
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
        console.log(`The human's score is ${humanScore} and the computer's score is ${computerScore}.`);
    }
    if (computerScore > humanScore) {
        console.log(`The Computer wins!`)
    } else if (humanScore > computerScore) {
        console.log(`The Human wins!`)
    } else {
        console.log(`It's a tie... Womp womp...`)
    }
} 

playGame()