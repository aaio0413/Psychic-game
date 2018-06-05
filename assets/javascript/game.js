

var wins = 0;
var loses = 0;
var guesses = "";
var guessNum = 10;


function generateChar() {
    var char = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var randomNum = Math.floor(Math.random()*25)
    return char[randomNum];
}

function updateResults() {
    document.querySelector("#Wins-number").innerHTML = wins;
    document.querySelector("#Loses-number").innerHTML = loses;
    document.querySelector("#Guesses-left").innerHTML = guessNum;
    document.querySelector("#Guesses-letters").innerHTML = guesses;
}

document.onkeyup = function(e) {
    var userGuesses = e.key;
    var computerGuesses = generateChar();
    var lettersDiv = document.getElementById("Guesses-letters");
    var guessDiv = document.getElementById("Guess-left")
    
    while(!userGuesses == computerGuesses && !guessNum == 0) {
        guesses += userGuesses.value + ", ";
        guessNum--;
        updateResults();
    }

    if (userGuesses == computerGuesses) {
        document.querySelector("#lead").innerHTML = "Correct! The letter computer thinks is " + computerGuesses + " !!"
        wins++;
        guesses="";
        guessNum = 10;
        updateResults();
    }
    if (guessNum == 0) {
        document.querySelector("#lead").innerHTML = "Too Bad! The letter computer thinks is " + computerGuesses + ", you lost!!"
        loses++;
        guesses="";
        guessNum = 10;
        updateResults();
        
    }
}