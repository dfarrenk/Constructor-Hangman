var Letter = function(letter) {
    this.value = letter;
    this.display = '_';
};

Letter.prototype.reveal = function() {
    this.display = this.value;
};

module.exports = Letter;
