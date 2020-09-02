    // Game Variables
    var mysteryNumber = 50;
    var playersGuess =0;
    var guessesRemaining = 10;
    var guessesMade = 0;
    var gameState = "";
    var gameWon = false;

    // The input and output field
    var input = document.querySelector("#input");
    var output = document.querySelector("#output");

    // The Button
    var button = document.querySelector("button");    
    button.addEventListener("click", clickHandler, false);

    function clickHandler(){
        playGame();
    }

    function playGame(){
        guessesRemaining --;
        guessesMade ++;
        gameState = " Guess: " + guessesMade + ", Remaining: " + guessesRemaining;

        playersGuess = parseInt(input.value);

        if(playersGuess > mysteryNumber){
            output.innerHTML = "That's too high." + gameState;

        // Check for the end of the game
        if (guessesRemaining < 1){
            endGame();
        }
        }
        else if(playersGuess < mysteryNumber){
            output.innerHTML = "That's too low." + gameState;

        // Check for the end of the game
        if (guessesRemaining < 1){
            endGame();
        }
        }
        else if(playersGuess === mysteryNumber){
            gameWon = true;
            endGame();
        }
    }

    // Add endGame function

    function endGame(){
        if (gameWon){
            output.innerHTML = "Yes, it's " + mysteryNumber + "!" + "<br>"
            + "It only took you " + guessesMade + " guesses.";
        }
        else {
            output.innerHTML = "No more guesses remaining!" + "<br>"
            + "The number was: " + mysteryNumber + ".";
        }
    }
