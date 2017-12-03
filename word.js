var Letter = require("./letter.js");

var Word = function(word) {
    this.value = word;
    this.letters = [];
};

// Initialize word.
Word.prototype.makeLetters = function() {
    for (let i = 0; i < this.value.length; i++) {
        this.letters.push(new Letter(this.value[i]));
    }
};

// Match letters to input.
Word.prototype.compareLetters = function(letter) {
    var matchFound = false;
    for (let i = 0; i < this.value.length; i++) {
        if (letter === this.letters[i].value) {
            this.letters[i].reveal();
            console.log("Match Found");
            matchFound = true;
        }
    }
    return matchFound;
};

// Check if the word is solved while printing it to console.
Word.prototype.printWord = function() {
    var wordString = '';
    var isSolved = true;
    for (let i = 0; i < this.value.length; i++) {
        wordString += this.letters[i].display + ' ';
        if (this.letters[i].display === '_') {
            isSolved = false;
        }
    }
    console.log(wordString);
    return isSolved;
};

module.exports = Word;
