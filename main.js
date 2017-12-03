var inquirer = require("inquirer");
var word = require("./word.js");
var randomWord = require('random-word');
// var admin = require("./admin.js");
// var user = require("./user.js");
var theWord;

function gameTurn(livesRemaining) {
    console.log("Chances Remaining: " + livesRemaining);

    if (theWord.printWord()) {
        console.log("You won");
        return gameRound();
    }

    inquirer.prompt([{
        type: "input",
        name: "letter",
        message: "Pick a letter: ",
        validate: function(value) {
            var pass = value.match(
                /[a-z]/i
            );
            if (pass) {
                return true;
            }
            return 'Please enter a letter';
        }
    }]).then(function(response) {
        console.log("--------------------------------");
        var letter = response.letter.toLowerCase();


        if (!theWord.compareLetters(letter)) {
            console.log("No match found");
            livesRemaining--;
        }

        if (livesRemaining) {
            gameTurn(livesRemaining);
        }
        else {
            console.log("Game Over. The word was: " + theWord.value);
            inquirer.prompt([{
                type: "confirm",
                name: "playAgain",
                message: "Play Again?"
            }]).then(function(response) {
                if (response.playAgain) {
                    console.log("New Game");
                    return gameRound();
                }
                else {
                    return console.log("Goodbye");
                }
            });
        }

    });
}

function gameRound() {
    theWord = new word(randomWord());
    theWord.makeLetters();
    gameTurn(9);
}

gameRound();
