var inquirer = require("inquirer");
var word = require("./word.js");
// var admin = require("./admin.js");
// var user = require("./user.js");

function gameRound(livesRemaining) {
    console.log("Word goes here");
    var theWord = new word("Zelda");
    console.log(theWord.value);
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
        var letter = response.letter.toLowerCase();
        //TODO iterate through word.letters for matches
    });
}

gameRound(0);
