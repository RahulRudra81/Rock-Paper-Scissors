var score = document.getElementById('Score');
var st = document.getElementById('stone');
var pa = document.getElementById('paper');
var sc = document.getElementById('scissors');

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
