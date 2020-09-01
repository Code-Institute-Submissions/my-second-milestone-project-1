    // Game Variables
    var mysteryNumber = 50;
    var playersGuess =0;
    
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
        playersGuess = parseInt(input.value);

        if(playersGuess > mysteryNumber){
            output.innerHTML = "That's too high.";
        }
        else if(playersGuess < mysteryNumber){
            output.innerHTML = "That's is too low.";
        }
        else if(playersGuess === mysteryNumber){
            output.innerHTML = "You got it!";
        }
    }

    
