function getComputerChoice(){
    // Random number between 1 and 3
    let choice = (Math.floor(Math.random() * 3))+1; 
    switch (choice) {
        case 1:
            return "Rock"
            break;
        case 2:
            return "Paper"
            break;
        case 3:
            return "Scissors"
            break;
        default:
            alert("Unknown choice")
            break;
    }
} 

function getResult(playerSelection, computerSelection) {
    // Only the first letter matters    
    let p = playerSelection[0]
    let c = computerSelection[0]

    const announc = document.querySelector(".announc");

    // Update history
    const history = document.querySelector(".history");
    const newDiv = document.createElement("div");
    const newEntry = document.createElement("p");
    const roundInfo = document.createElement("p");
    roundInfo.textContent = `R ${CURR_ROUND}/${TOTAL_ROUNDS}`;
    
    if (p == c){
        // Draw scenario
        newEntry.textContent = `It's a draw! Both players chose ${playerSelection}.`;
        newDiv.appendChild(roundInfo);
        newDiv.appendChild(newEntry);
        history.appendChild(newDiv);
        return "draw";
    }else if(
        (p == "R" && c == "S") ||
        (p == "P" && c == "R") ||
        (p == "S" && c == "P")
    ){
        newEntry.textContent = `Player wins! ${playerSelection} beats ${computerSelection}.`
        newDiv.appendChild(roundInfo);
        newDiv.appendChild(newEntry);
        history.appendChild(newDiv);
        return "player";
    }else{
        newEntry.textContent = `Computer wins! ${computerSelection} beats ${playerSelection}.`;
        newDiv.appendChild(roundInfo);
        newDiv.appendChild(newEntry);
        history.appendChild(newDiv);
        return "computer"
    }
}

let PLAYER_NAME = "Player"
function updateControls(){
    // Update scoreboard
    const sb = document.querySelectorAll(".scoreboard > p");
    sb[0].textContent = `${PLAYER_NAME}: ${P_WINS}`;
    sb[1].textContent = `Computer: ${C_WINS}`;

    // Update round counter
    const r_counter = document.querySelector(".round-counter");
    r_counter.textContent = `Round ${CURR_ROUND} of ${TOTAL_ROUNDS}`;
}

function declareWinner(){
    console.log("Inside winner declaration");
    if (CURR_ROUND == TOTAL_ROUNDS){

        const announc = document.querySelector(".announc");
        if (P_WINS == C_WINS){
            announc.textContent = `It's a tie! Both players have ${P_WINS} win(s)!`;
        }else if (P_WINS > C_WINS){
            announc.textContent = `Player is the winner with ${P_WINS} win(s)!`;
        }else {
            announc.textContent = `Computer is the winner with ${C_WINS} win(s)!`;
        }
        // announc.appendChild(win);

        // confirm(announc.textContent + "\nPress OK to start a new game");
        
        resetControls();
        
    }
}

// Reset all counters and elements to a game start
function resetControls(){
    // Reset counters for first round
    if(CURR_ROUND == 1){
        P_WINS = 0;
        C_WINS = 0;

        // Reset history
        const history = document.querySelector(".history");
        const lastRounds = document.querySelectorAll(".history > div");
        lastRounds.forEach(r => history.removeChild(r));

        const announc = document.querySelector(".announc");
        announc.textContent = "";
    }

    updateControls();
}


let TOTAL_ROUNDS = 3;
let CURR_ROUND = 1;
let P_WINS = 0;
let C_WINS = 0;
function playRound(playerSelection){
    if (CURR_ROUND > TOTAL_ROUNDS){
        CURR_ROUND = 1;
    }


    resetControls();

    

    // Play the round
    let result = getResult(playerSelection, getComputerChoice());
    if (result == "draw"){
        // Do nothing
    }else if (result == "player"){
        P_WINS += 1;
    }else{
        C_WINS += 1;
    }

    // Update controls
    
    updateControls();
    declareWinner();
    CURR_ROUND++;

}




function playerChoice(e){
    // console.log(e);
    let btn = e.target;
    console.log(btn.textContent);
    playRound(btn.textContent);
}

// Add an click listener to the buttons
const bts = Array.from(document.querySelectorAll("button"));
bts.forEach(btn => btn.addEventListener('click', playerChoice));


// console.log(getComputerChoice())
// console.log(playRound("rock", getComputerChoice()))
// console.log(playRound("paper", getComputerChoice()))
// console.log(playRound("scissors", getComputerChoice()))
// console.log(playRound("rock", getComputerChoice()))
// console.log(playRound("paper", getComputerChoice()))
// console.log(playRound("scissors", getComputerChoice()))
// game()

