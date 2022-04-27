let score1 = 0;
let score2 = 0;

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
                    score2++;
                    return "You Lose! " + computerSelection + " beats " + playerSelection.toLowerCase().charAt(0).toUpperCase() + playerSelection.toLowerCase().slice(1);
                case "scissors":
                    score1++;
                    return "You Win! " + playerSelection.toLowerCase().charAt(0).toUpperCase() + playerSelection.toLowerCase().slice(1) + " beats " + computerSelection; 
            }
            break;
        case "paper":
            switch (computerSelection.toLowerCase()) {
                case "rock":
                    score1++;
                    return "You Win! " + playerSelection.toLowerCase().charAt(0).toUpperCase() + playerSelection.toLowerCase().slice(1) + " beats " + computerSelection;
                case "paper":
                    return "It's a Draw!";
                case "scissors":
                    score2++;
                    return "You Lose! " + computerSelection + " beats " + playerSelection.toLowerCase().charAt(0).toUpperCase() + playerSelection.toLowerCase().slice(1); 
            }
            break;
        case "scissors":
            switch (computerSelection.toLowerCase()) {
                case "rock":
                    score2++;
                    return "You Lose! " + computerSelection + " beats " + playerSelection.toLowerCase().charAt(0).toUpperCase() + playerSelection.toLowerCase().slice(1);
                case "paper":
                    score1++;
                    return "You Win! " + playerSelection.toLowerCase().charAt(0).toUpperCase() + playerSelection.toLowerCase().slice(1) + " beats " + computerSelection;
                case "scissors":
                    return "It's a Draw!";  
            }
            break;
    }
}

function game() {
    setupGame();

    const buttons = document.querySelectorAll(".button");
    const playerScore = document.querySelector("#playerScore");
    const computerScore = document.querySelector("#computerScore");
    const text = document.querySelector(".text");

    buttons.forEach((button) => {
        button.addEventListener('click', function(e) {
            const playerChoice = e.target.textContent;
            const computerChoice = computerPlay();
            text.textContent = playRound(playerChoice, computerChoice);

            playerScore.textContent = score1;    
            computerScore.textContent = score2; 

            if (score1 == 5) {
                text.textContent = "You Win!";
                clearGame();
            } else if (score2 == 5) {
                text.textContent = "You Lose!";
                clearGame();
            }
        });
    });
}

function setupGame() {
    const container = document.querySelector(".container");
    const gameContainer = document.createElement("div");
    gameContainer.classList.add("gameContainer");
    const playerContainer = document.createElement("div");
    playerContainer.classList.add("player-container");
    const playerName = document.createElement("p");
    playerName.textContent = "You";
    const playerScore = document.createElement("p");
    playerScore.textContent = "0";
    playerScore.id = "playerScore";
    playerScore.classList.add("score");

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");
    const rock = document.createElement("div");
    rock.textContent = "Rock";
    rock.classList.add("button");
    const paper = document.createElement("div");
    paper.textContent = "Paper";
    paper.classList.add("button");
    const scissors = document.createElement("div");
    scissors.textContent = "Scissors";
    scissors.classList.add("button");

    const computerContainer = document.createElement("div");
    computerContainer.classList.add("player-container");
    const computerName = document.createElement("p");
    computerName.textContent = "Computer";
    const computerScore = document.createElement("p");
    computerScore.textContent = "0";
    computerScore.id = "computerScore";
    computerScore.classList.add("score");
    
    playerContainer.appendChild(playerName);
    playerContainer.appendChild(playerScore);
    buttonContainer.appendChild(rock);
    buttonContainer.appendChild(paper);
    buttonContainer.appendChild(scissors);
    computerContainer.appendChild(computerName);
    computerContainer.appendChild(computerScore);
    gameContainer.appendChild(playerContainer);
    gameContainer.appendChild(buttonContainer);
    gameContainer.appendChild(computerContainer);
    container.appendChild(gameContainer);
}

function clearGame() {
    const container = document.querySelector(".container");
    const gameContainer = document.querySelector(".gameContainer");
    const replay = document.createElement("div");
    const text = document.querySelector(".text");
    replay.textContent = "Play Again";
    replay.classList.add("replay");
    container.removeChild(gameContainer);
    container.appendChild(replay);

    replay.addEventListener('click', function (e) {
        text.textContent = "Please select Rock, Paper or Scissors!"
        container.removeChild(replay);
        score1 = 0;
        score2 = 0;
        game();
    });
}


