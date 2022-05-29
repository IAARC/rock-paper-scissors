var winsOfPlayer = 0;
var winsOfComputer = 0;
function computerPlay () {
    var plays = ["Rock", "Scissors", "Paper"];
    var rand = Math.floor(Math.random()*plays.length);
    var randPlays = plays[rand];
    return randPlays;
}
function playRound (playerSelection, computeSelection) {
     computeSelection = computerPlay();
     playerSelection = prompt("choose paper, scissors or rock");
     let textOfWin = "You win!" + " " + playerSelection + " " + "beats" + " " + computeSelection;
     let textOfLose = "You lose!" + " " + computeSelection + " " + "beats" + " " + playerSelection;
     let textOfDraw = "You draw! please try again"
     if (playerSelection.toLowerCase() == "rock" && computeSelection.toLowerCase() == "paper") {
        winsOfPlayer++
        return textOfWin;
     } else if (playerSelection.toLowerCase() == "paper" && computeSelection.toLowerCase() == "rock") {
         winsOfPlayer++
         return textOfWin;
     } else if (playerSelection.toLowerCase() == "scissors" && computeSelection.toLowerCase() == "paper") {
        winsOfPlayer++
         return textOfWin;
     } else if (playerSelection.toLowerCase() === computeSelection.toLowerCase()) { 
        return textOfDraw;
     } else {
         winsOfComputer++
         return textOfLose;
     } 
}
function score (a, b) {
    a = winsOfPlayer;
    b = winsOfComputer;
    let scoreOfTheRound = a + " - " + b;
    return scoreOfTheRound;
}
function game () {
winsOfComputer = 0; 
winsOfPlayer = 0;
for (i = 0; i <= 5; i++)
if (winsOfPlayer === 3 ) {
    return "You win! " + score();
} else if (winsOfComputer === 3) {
    return "You lose! " + score() 
} else {
    playRound();
    console.log(score())
}
    
}