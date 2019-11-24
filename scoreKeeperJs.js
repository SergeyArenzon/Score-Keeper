var p1btn = document.getElementById("p1Btn");
var p2btn = document.getElementById("p2Btn");
var resetBtn = document.getElementById("resetBtn");
var player1 = document.getElementById("player1");
var player2 = document.getElementById("player2");
var maxVal = document.getElementById("maxVal");
var maxScore = document.querySelector("input");
var output = document.querySelector("output");

gameOver = false;

var oneScore = 0;
var twoScore = 0;

winnerScore = 5;


p1btn.addEventListener("click",function(){
    if(gameOver === false){
        oneScore++;
        player1.textContent = oneScore;
        
        if(winnerScore === oneScore){
            gameOver = true;
            player1.classList.add("winner");
            player1.classList.add("boldText");
            output.classList.add("player1won");
            output.textContent = "Player One Won!"
        } 
    }
       
    


});

p2btn.addEventListener("click",function(){
    if(gameOver === false){
        twoScore++;
        player2.textContent = twoScore;
        console.log(winnerScore)
        if(winnerScore === twoScore){
           gameOver = true; 
           player2.classList.add("winner");
           player2.classList.add("boldText");
           output.classList.add("player2won");
           output.textContent = "Player Two Won!"

          
        } 
    }
    

});

resetBtn.addEventListener("click",function(){
    oneScore = 0;
    twoScore = 0;
    player1.textContent = oneScore;
    player2.textContent = twoScore;
    player1.classList.remove("winner");
    player2.classList.remove("winner");
    output.classList.remove("player1won");
    output.classList.remove("player2won");
    output.textContent = "";
    player1.classList.remove("boldText");
    player2.classList.remove("boldText");
    gameOver = false;

})


maxScore.addEventListener("change",function(){
    if(isNaN(maxScore.value)||maxScore.value<0) alert("IS'NT a Number!!");
    else{
        winnerScore = Number(maxScore.value);
        maxVal.textContent = winnerScore;
    }
    
})


