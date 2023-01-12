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

function cleanInputString(str){
    // Any case is valid input, but internally it is only valid in 
    // First Upper case
    let resultStr = ""
    for (let i=0; i < str.length; i++) {
        let ch = str[i]
        if (ch == ch.toUpperCase() && i != 0){
            // Current char is uppercase, change to lower
            resultStr += str[i].toLowerCase()
        }else if(ch != ch.toUpperCase() && i == 0){
            // First char is not uppercase, change to upper
            resultStr += str[i].toUpperCase()
        }else{
            resultStr += str[i]
        }   
    }
    return resultStr
}

function playRound(playerSelection, computerSelection) {
    // let choice = prompt("Choose rock, paper or scissors: ", "")
    playerSelection = cleanInputString(playerSelection)

    // Only the first letter matters    
    let p = playerSelection[0]
    let c = computerSelection[0]

    // Draw scenario
    if (p == c){
        console.log(`It's a draw! Both players chose ${playerSelection}.`)
        return "draw";
    }else if(
        (p == "R" && c == "S") ||
        (p == "P" && c == "R") ||
        (p == "S" && c == "P")
    ){
        console.log(`Player wins! ${playerSelection} beats ${computerSelection}.`)
        return "player";
    }else{
        console.log(`Computer wins! ${computerSelection} beats ${playerSelection}.`)
        return "computer"
    }
}

function getPlayerChoice(){
    let choice = prompt("Choose rock, paper or scissors: ", "")
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


let NUM_ROUNDS = 5
function game(){
    let p_wins = 0;
    let c_wins = 0;
    for(let i=0; i<NUM_ROUNDS; i++){
        let result = playRound(getPlayerChoice(), getComputerChoice())
        
        if (result == "draw"){
            // Do nothing
        }else if (result == "player"){
            p_wins += 1
        }else{
            c_wins += 1
        }
        
    }


    if (p_wins == c_wins){
        console.log(`It's a tie! Both players have ${p_wins} win(s)!`)
    }else if (p_wins > c_wins){
        console.log(`Player is the winner with ${p_wins} win(s)!`)
    }else (
        console.log(`Computer is the winner with ${c_wins} win(s)!`)
    )
}


// console.log(getComputerChoice())
// console.log(playRound("rock", getComputerChoice()))
// console.log(playRound("paper", getComputerChoice()))
// console.log(playRound("scissors", getComputerChoice()))
// console.log(playRound("rock", getComputerChoice()))
// console.log(playRound("paper", getComputerChoice()))
// console.log(playRound("scissors", getComputerChoice()))
game()

