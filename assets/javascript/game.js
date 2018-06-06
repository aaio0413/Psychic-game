

var wins = 0;
var loses = 0;
var guesses = "";
var guessNum = 10;

window.onload = function() {
    updateResults();
}

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
    
    if(userGuesses != computerGuesses && guessNum != 0) {
        guesses += userGuesses + ", ";
        guessNum--;
        console.log(guessNum)
        console.log(userGuesses)
        updateResults();
    }

    if (userGuesses == computerGuesses) {
        document.querySelector("#lead").innerHTML = "Correct! The letter computer thinks is " + computerGuesses + " !!"
        document.querySelector("#lead").setAttribute("style", "color: red, font-size: 25px")
        wins++;
        guesses="";
        guessNum = 10;
        updateResults();
    }
    if (guessNum == 0) {
        document.querySelector("#lead").innerHTML = "Too Bad! The letter computer thinks is " + computerGuesses + ", you lost!!"
        document.querySelector("#lead").setAttribute("style", "color: red, font-size: 25px")
        loses++;
        guesses="";
        guessNum = 10;
        updateResults();
        
    }
}