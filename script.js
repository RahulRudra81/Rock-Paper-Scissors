var score = document.getElementsByClassName('score');
var st = document.getElementsByClassName('stone');
var pa = document.getElementsByClassName('paper');
var sc = document.getElementsByClassName('scissors');

var keys = ["stone", "paper", "scissors"];
      
// An array of values
var values = ["paper", "scissors", "stone"];
  
// Object created
var obj = {};
  
// Using loop to insert key
// value in Object
for(var i = 0; i < keys.length; i++){
    obj[keys[i]] = values[i];
}
  
/*
Now we have, an object that that contains value that can defeat their respective key
Ab simple kam karna hai, user ki selected value lo if its not equal to value he wins if it is
then he loses
*/

var scoreCount = 0;

function scoreIncrement()
{
    score.innerHTML = scoreCount; 
}

function pcChoice()
{
    var pcc = Math.floor(Math.random()*3);
    return pcc;
}

function calulate(playerChoice,computerChoice)
{
    if(playerChoice != values[computerChoice])
    {
        scoreCount++;
        scoreIncrement();
    }
}

score[0].innerHTML = "Lauda";

function laudaLassan()
{
    var value = score[0].innerHTML;
    if(value == "Lauda")
    {
        score[0].innerHTML = "Lassan";
    }
    else
    score[0].innerHTML = "Lauda"
}
setInterval(laudaLassan, 500);

