var player1ScoreDiv=document.querySelector('.player_1_score');
var player1ScoreNum=0;
var player2ScoreDiv=document.querySelector('.player_2_score');
var player2ScoreNum=0;
var fastFactDiv=document.querySelector('.fast_fact');
var answerNum=null;
var guessNumInput=document.querySelector('.guess_num');
var playerNameStrs=[localStorage.getItem('player1NameStr'), localStorage.getItem('player2NameStr')];
var currentPlayerNameStrIndex=0;
var currentPlayerNameStr=localStorage.getItem('player1NameStr');
var currentPlayerNameDiv=document.querySelector('.current_player_name');

player1ScoreDiv.innerText=localStorage.getItem('player1NameStr')+"'s Score: 0";
player2ScoreDiv.innerText=localStorage.getItem('player2NameStr')+"'s Score: 0";
currentPlayerNameDiv.innerText='Current Player: '+currentPlayerNameStr;
Math.getRandomInt=function(minNum, maxNum){
    minNum=this.ceil(minNum);
    maxNum=this.floor(maxNum);
    return this.floor(this.random()*(maxNum-minNum+1)+minNum);
};

function setUpRandomFastFact(){
    var operationStr=['+', 'x', '-', '/', '^'][Math.getRandomInt(0, 4)];
    var firstExpNum=null;
    var secondExpNum=null;
        
    if(operationStr=='+'){
        firstExpNum=Math.getRandomInt(0, 24);
        secondExpNum=Math.getRandomInt(0, 24-firstExpNum);
        answerNum=firstExpNum+secondExpNum;
        fastFactDiv.innerText=firstExpNum+'+'+secondExpNum;
    }else if(operationStr=='-'){
        firstExpNum=Math.getRandomInt(0, 24);
        secondExpNum=Math.getRandomInt(0, firstExpNum);
        answerNum=firstExpNum-secondExpNum;
        fastFactDiv.innerText=firstExpNum+'-'+secondExpNum;
    }else if(operationStr=='^'){
        firstExpNum=Math.getRandomInt(0, 10);
        secondExpNum=Math.getRandomInt(0, 10);
        answerNum=Math.pow(firstExpNum, secondExpNum);
        fastFactDiv.innerText=firstExpNum+'^'+secondExpNum;
    }else if(operationStr=='/'){
        firstExpNum=[12, 24, 36, 48, 60, 72, 84, 96, 108, 120, 132, 144][Math.getRandomInt(0, 11)];

        if(firstExpNum==12){
            secondExpNum=Math.getRandomInt(0, 12);
        }else if(firstExpNum==24){
            secondExpNum=[2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24][Math.getRandomInt(0, 11)];
        }else if(firstExpNum==36){
            secondExpNum=[3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36][Math.getRandomInt(0, 11)];
        }else if(firstExpNum==48){
            secondExpNum=[4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48][Math.getRandomInt(0, 11)];
        }else if(firstExpNum==60){
            secondExpNum=[5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60][Math.getRandomInt(0, 11)];
        }else if(firstExpNum==72){
            secondExpNum=[6, 12, 18, 24, 30, 36, 42, 48, 54, 60, 66, 72][Math.getRandomInt(0, 11)];
        }else if(firstExpNum==84){
            secondExpNum=[7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84][Math.getRandomInt(0, 11)];
        }else if(firstExpNum==96){
            secondExpNum=[8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96][Math.getRandomInt(0, 11)];
        }else if(firstExpNum==108){
            secondExpNum=[9, 18, 27, 36, 45, 54, 63, 72, 81, 90, 99, 108][Math.getRandomInt(0, 11)];
        }else if(firstExpNum==120){
            secondExpNum=[10, 20, 30, 40, 50, 60, 70, 80, 54, 60, 66, 72][Math.getRandomInt(0, 11)];
        }else if(firstExpNum==132){
            secondExpNum=[11, 22, 33, 44, 55, 66, 77, 88, 99, 110, 121, 132][Math.getRandomInt(0, 11)];
        }else{
            secondExpNum=[12, 24, 36, 48, 60, 72, 84, 96, 108, 120, 132, 144][Math.getRandomInt(0, 11)];
        }

        answerNum=firstExpNum/secondExpNum;
        fastFactDiv.innerHTML=firstExpNum+'&div;'+secondExpNum;
    }else{
        firstExpNum=Math.getRandomInt(0, 12);
        secondExpNum=Math.getRandomInt(0, 12);
        answerNum=firstExpNum*secondExpNum;
        fastFactDiv.innerHTML=firstExpNum+'&times;'+secondExpNum;
    }
}

function checkAnswer(){
    if(guessNumInput.value==answerNum){
        alert('Correct!');
        if(currentPlayerNameStrIndex==0){
            player1ScoreNum=player1ScoreNum+1;
            player1ScoreDiv.innerText=localStorage.getItem('player1NameStr')+"'s Score: "+player1ScoreNum;
        }else{
            player2ScoreNum=player2ScoreNum+1;
            player2ScoreDiv.innerText=localStorage.getItem('player2NameStr')+"'s Score: "+player2ScoreNum;
        }
    }else{
        alert('Oops! Incorrect!');
    }

    guessNumInput.value=0;
    
    currentPlayerNameStrIndex=currentPlayerNameStrIndex+1;

    if(currentPlayerNameStrIndex>1){
        currentPlayerNameStrIndex=0;  
    }

    currentPlayerNameStr=playerNameStrs[currentPlayerNameStrIndex];
    currentPlayerNameDiv.innerText='Current Player: '+currentPlayerNameStr;
    setUpRandomFastFact();
}

setUpRandomFastFact();