var score = document.getElementsByClassName('score');
var st = document.getElementsByClassName('stone');
var pa = document.getElementsByClassName('paper');
var sc = document.getElementsByClassName('scissors');
var result = document.getElementById('result');

var userBg = document.getElementById('userBg');
var userIcon = document.getElementById("userIcon");

var computerBg = document.getElementById('computerBg');
var computerIcon = document.getElementById('pcIcon');

/*
Now we have, an object that that contains value that can defeat their respective key
Ab simple kam karna hai, user ki selected value lo if its not equal to value he wins if it is
then he loses
*/

var scoreCount = localStorage.getItem("score");

function scoreIncrement() {
    score.innerHTML = scoreCount;
    localStorage.setItem("score", scoreCount);
}

function pcChoice() {
    var pcc = Math.floor(Math.random() * 3);
    return pcc;
}

function choiceSetter(playerChoice,computerChoice)
{
    if(computerChoice == "rock")
    {
        userBg.classList.add("userbgrock");
        userIcon.src = "images/icon-rock.svg";
    }
    else if(computerChoice == "paper")
    {
        userBg.classList.add("userbg");
        userIcon.src = "images/icon-paper.svg";
    }
    else if(computerChoice == "scissors")
    {
        userBg.classList.add("userbgscissors");
        userIcon.src = "images/icon-scissors.svg";
    }

    if(playerChoice == "rock")
    {
        computerBg.classList.add("userbgrock");
        computerIcon.src = "images/icon-rock.svg";
    }
    else if(playerChoice == "paper")
    {
        computerBg.classList.add("userbg");
        computerIcon.src = "images/icon-paper.svg";
    }
    else if(playerChoice == "scissors")
    {
        computerBg.classList.add("userbgscissors");
        computerIcon.src = "images/icon-scissors.svg";
    }
}

function calculate(playerChoice, computerChoice) {
    choiceSetter(playerChoice,computerChoice);
    if ((playerChoice == "rock" && computerChoice == "paper") || (playerChoice == "paper" && computerChoice == "scissors") || (playerChoice == "scissors" && computerChoice == "stone")) {
        result.innerText = "Lodu Computer se har gya XD";
    }
    else if(playerChoice == computerChoice)
    {
        result.innerHTML = "Tie Ho Gaya MC";
    }
    else {
        scoreCount++;
        console.log(`Your Choice was ${playerChoice} Computer choice was ${computerChoice}`);
        scoreIncrement();
        result.innerHTML = "You Win";
    }

}

function showRules() {
    var popup = document.getElementsByClassName("modal");
    popup[0].classList.add('active');
}

function hideRules() {
    var popup = document.getElementsByClassName("modal");
    popup[0].classList.remove('active');
}


function main(userChoice, pcChoice) {
    calculate(userChoice, pcChoice);

}