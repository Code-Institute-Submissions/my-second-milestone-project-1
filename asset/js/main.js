// Game variables
var mysteryNumber = Math.floor(Math.random() * 100);

playersGuess = 0;
var guessesRemaining = 10;
var guessesMade = 0;
var gameState = "";
var gameWon = false;

// The Input and GuessResult fields
var input = document.querySelector(".input");
var guessResult = document.querySelector(".guessResult");

// The button
var guessButton = document.querySelector(".guessButton");
guessButton.addEventListener("click", clickHandler, false);

 // Restart Button
function newGame() {
window.location.reload();
    }

window.addEventListener("keydown", keydownHandler, false);
function keydownHandler(event) {
    if(event.keyCode === 13) {
        playGame();
    }
}

function clickHandler() {
    playGame();
}

function playGame() {
    guessesRemaining--;
    guessesMade++;
    gameState = " Guess: " + guessesMade + ", Remaining: " + guessesRemaining;
 
   playersGuess = parseInt(input.value);

    if(playersGuess > mysteryNumber) {
        guessResult.innerHTML = "That's higher." + gameState;

        // Check for the end of the game
        if (guessesRemaining < 1) {
            endGame();
        }
    } else if (playersGuess < mysteryNumber) {
        guessResult.innerHTML = "That's lower." + gameState;

        // Check for the end of the game
        if (guessesRemaining < 1) {
            endGame();
        }
    } else if (playersGuess === mysteryNumber) {
        gameWon = true;
        endGame();
    }
}
    function endGame() {
        if (gameWon) {
            guessResult.innerHTML = "Yes, it's " + mysteryNumber + "!" + "<br>" + "It took you " + guessesMade + " guess(es)"
        } else {
            guessResult.innerHTML = "No more guesses remaining!" + "<br>" + "The number was: " + mysteryNumber + ".";
        }

        // Disable the button
        guessButton.removeEventListener("click", clickHandler, false);
        button.disabled = true;

        // Disable the enter key
        window.removeEventListener("keydown", keydownHandler, false);

        // Disable the input field
        input.disabled = true;
    }  
