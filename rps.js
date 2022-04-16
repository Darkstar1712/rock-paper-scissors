let playerScore = 0;
let computerScore = 0;

game();

function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3 + 1);

    switch (randomNumber) {
        case 1: 
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    switch (playerSelection.toLowerCase()) {
        case "rock":
            switch (computerSelection.toLowerCase()) {
                case "rock":
                    return "It's a Draw!";
                case "paper":
                    computerScore++;
                    return "You Lose! " + computerSelection + " beats " + playerSelection.toLowerCase().charAt(0).toUpperCase() + playerSelection.toLowerCase().slice(1);
                case "scissors":
                    playerScore++;
                    return "You Win! " + playerSelection.toLowerCase().charAt(0).toUpperCase() + playerSelection.toLowerCase().slice(1) + " beats " + computerSelection; 
            }
            break;
        case "paper":
            switch (computerSelection.toLowerCase()) {
                case "rock":
                    playerScore++;
                    return "You Win! " + playerSelection.toLowerCase().charAt(0).toUpperCase() + playerSelection.toLowerCase().slice(1) + " beats " + computerSelection;
                case "paper":
                    return "It's a Draw!";
                case "scissors":
                    computerScore++;
                    return "You Lose! " + computerSelection + " beats " + playerSelection.toLowerCase().charAt(0).toUpperCase() + playerSelection.toLowerCase().slice(1); 
            }
            break;
        case "scissors":
            switch (computerSelection.toLowerCase()) {
                case "rock":
                    computerScore++;
                    return "You Lose! " + computerSelection + " beats " + playerSelection.toLowerCase().charAt(0).toUpperCase() + playerSelection.toLowerCase().slice(1);
                case "paper":
                    playerScore++;
                    return "You Win! " + playerSelection.toLowerCase().charAt(0).toUpperCase() + playerSelection.toLowerCase().slice(1) + " beats " + computerSelection;
                case "scissors":
                    return "It's a Draw!";  
            }
            break;
        default:
            return playRound(prompt("Rock, Paper or Scissors?"), computerSelection);
    }
}

function game() {
        for(let i = 0; i < 5; i++) {
        let playerChoice = prompt("Rock, Paper or Scissors?");
        let computerChoice = computerPlay();
        
        console.log(playRound(playerChoice, computerChoice));
    }

    if (playerScore > computerScore) {
        console.log("You Win!");
    } else if (computerScore > playerScore) {
        console.log("You Lose!");
    } else {
        console.log("It's a Draw!");
    }
}


