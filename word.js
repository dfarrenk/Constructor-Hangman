// var letter = require("./letter.js");

var Word = function(word) {
    this.value = word;
    this.letters = [];
    // this.makeLetters = function() {
    //     for (let i in this.theWord.length) {
    //         this.letters[i].push(new letter(word[i]));
    //     }
    // };
};

module.exports = Word;
