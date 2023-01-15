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

    // Draw scenario
    if (p == c){
        const announc = document.querySelector(".announc");
        announc.textContent = `It's a draw! Both players chose ${playerSelection}.`;
        return "draw";
    }else if(
        (p == "R" && c == "S") ||
        (p == "P" && c == "R") ||
        (p == "S" && c == "P")
    ){
        const announc = document.querySelector(".announc");
        announc.textContent = `Player wins! ${playerSelection} beats ${computerSelection}.`
        return "player";
    }else{
        const announc = document.querySelector(".announc");
        announc.textContent = `Computer wins! ${computerSelection} beats ${playerSelection}.`;
        return "computer"
    }
}

function getPlayerChoice(){
    // let choice = prompt("Choose rock, paper or scissors: ", "")
    playerSelection = cleanInputString(choice)

    while(
        playerSelection != "Rock" && 
        playerSelection != "Paper" && 
        playerSelection != "Scissors")
    {
        console.log("Unknown option. Try again!")
        choice = prompt("Choose rock, paper or scissors: ", "")
        playerSelection = cleanInputString(choice)
    }
    return playerSelection
}


// let NUM_ROUNDS = 1
// function game(){
//     let p_wins = 0;
//     let c_wins = 0;
//     for(let i=0; i<NUM_ROUNDS; i++){
//         let playerChoice = await buttonCallback();
//         let result = playRound(getPlayerChoice(), getComputerChoice())
        
//         if (result == "draw"){
//             // Do nothing
//         }else if (result == "player"){
//             p_wins += 1
//         }else{
//             c_wins += 1
//         }
        
//     }


//     if (p_wins == c_wins){
//         console.log(`It's a tie! Both players have ${p_wins} win(s)!`)
//     }else if (p_wins > c_wins){
//         console.log(`Player is the winner with ${p_wins} win(s)!`)
//     }else (
//         console.log(`Computer is the winner with ${c_wins} win(s)!`)
//     )
// }


let PLAYER_NAME = "Player"

function updateScoreboard(){
    const sb = document.querySelectorAll(".scoreboard > p");
    sb[0].textContent = `${PLAYER_NAME}: ${P_WINS}`;
    sb[1].textContent = `Computer: ${C_WINS}`;
}

function declareWinner(){
    console.log("Inside winner declaration");
    if (CURR_ROUND > TOTAL_ROUNDS){
        const announc = document.querySelector(".announc");
        let win = document.createElement("p");
        win.classList.add("winner");
        if (P_WINS == C_WINS){
            win.textContent = `It's a tie! Both players have ${P_WINS} win(s)!`;
        }else if (P_WINS > C_WINS){
            win.textContent = `Player is the winner with ${P_WINS} win(s)!`;
        }else {
            win.textContent = `Computer is the winner with ${C_WINS} win(s)!`;
        }
        CURR_ROUND = 1;
        announc.appendChild(win);
    }
}


let TOTAL_ROUNDS = 3;
let CURR_ROUND = 1;
let P_WINS = 0;
let C_WINS = 0;
function playRound(playerSelection){
    // Reset counters for first round
    if(CURR_ROUND == 1){
        P_WINS = 0;
        C_WINS = 0;
    }

    // Reset announcement div
    const announc = document.querySelector(".announc");
    const winner_child = document.querySelector(".announc > .winner");
    if (winner_child){
        console.log(winner_child);
        announc.removeChild(winner_child)
    }

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
    CURR_ROUND++;
    updateScoreboard();
    declareWinner();
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

