console.log("Hello")


function getComputerChoice(){
    // Random number between 1 and 3
    let choice = (Math.floor(Math.random() * 3))+1; 
    console.log(choice)
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


console.log(getComputerChoice())