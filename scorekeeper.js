'use strict'

var player1ScoreDisplay = document.querySelector("#player1ScoreDisplay");
var player2ScoreDisplay = document.querySelector("#player2ScoreDisplay");
var player1Score = 0;
var player2Score = 0;
var maxScore = document.getElementById("set-max");
var maxScoreDisplay = document.querySelector("#max-line");
var gameOver = false;


function defineMax(){
    maxScoreDisplay.textContent = maxScore.value;
}

function markWinner(){
    target.classList.add("mark-winner");
}


function addScorePlayer1(){
    if(!gameOver){
        player1Score ++;
        player1ScoreDisplay.textContent = player1Score;
        if(player1Score === +maxScore.value){
            player1ScoreDisplay.classList.add("mark-winner")
            gameOver = true;
        }
    }
}
        
        
function addScorePlayer2(){
    if(!gameOver){
        player2Score ++;
        player2ScoreDisplay.textContent = player2Score;
        if(player2Score === +maxScore.value){
            player2ScoreDisplay.classList.add("mark-winner")
            gameOver = true;
        }
    }
}

function resetScore(){
    player2Score = 0;
    player1Score = 0;
    player1ScoreDisplay.textContent = player1Score;
    player2ScoreDisplay.textContent = player2Score;
    player1ScoreDisplay.classList.remove("mark-winner");
    player2ScoreDisplay.classList.remove("mark-winner");
    gameOver = false;
}

function appMain(){
    document.querySelector("#player1-button").addEventListener("click", addScorePlayer1);
    document.querySelector("#player2-button").addEventListener("click", addScorePlayer2);
    document.querySelector("#reset").addEventListener("click", resetScore);
    document.querySelector("#set-max").addEventListener("change", defineMax);
}

appMain()