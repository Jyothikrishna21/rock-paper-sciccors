
const choice=["rock","paper","scissor"];
const plyDis=document.getElementById("playerDis");
const compDis=document.getElementById("computerDis");
const resDis=document.getElementById("resultDis");
const plyScore=document.getElementById("plyScoreDis");
const compScore=document.getElementById("compScoreDis");

let playerScore=0;
let computerScore=0;

function playGame(playerChoice){

    let computerChoice=choice[Math.floor(Math.random()*3)];

    let result="";

    if(playerChoice===computerChoice){
        result="IT'S A TIE!"
    }else{
        switch(playerChoice){
            case "rock":
                result=(computerChoice==="scissor") ? "YOU WIN!" : "YOU LOSE";
                break;
            case "paper":
                result=(computerChoice==="rock") ? "YOU WIN!" : "YOU LOSE";
                break;
            case "scissor":
                result=(computerChoice==="paper") ? "YOU WIN!" : "YOU LOSE";
                break;           
        }
    }

    plyDis.textContent=`PLAYER: ${playerChoice}`;
    compDis.textContent=`COMPUTER: ${computerChoice}`;
    resDis.textContent=result;

    resDis.classList.remove("green","red");

    switch(result){
        case "YOU WIN!":
            resDis.classList.add("green")
            playerScore++;
            plyScore.textContent=playerScore;
            break;
        case "YOU LOSE":
            resDis.classList.add("red");
            computerScore++;
            compScore.textContent=computerScore;
            break;
    }
}