var _this;
var maxChances = 10;

var gameController = {
    form: document.querySelector('form'),
    input: document.querySelector('[name="guess"]'),
    word: document.querySelector('.word'),
    chances: document.querySelector('.chances'),
    pastGuesses: document.querySelector('.past-guesses')
}

function Hangman() {
    this.runGame = true;
    this.words = [
        'ultron',
        'thanos',
        'wanda',
        'tchalla',
        'hulk'
    ];
    this.word = '';
    this.displayString = '';
    this.chances = maxChances;
    this.pastGuesses = [];

    this.run = function () {
        this.setup();
        _this = this;
        gameController.form.addEventListener('submit', this.guessLetter);
    };

    this.setup = function () {
        gameController.pastGuesses.innerHTML = '';
        this.pastGuesses = [];
        this.chances = maxChances;
        this.displayString = '';
        var i = Math.floor(Math.random() * this.words.length);
        this.word = this.words[i];

        for (var i = 0; i < this.word.length; i++) this.displayString += '_';
        gameController.word.textContent = this.displayString;
        gameController.chances.textContent = this.chances;
        console.log(this.word);
    };

    this.guessLetter = function (event) {
        event.preventDefault();
        if (_this.word.includes(gameController.input.value)) {
            for (var i = 0; i < _this.word.length; i++) {
               var currentChar = _this.word.substr(i, 1);
                if (currentChar === gameController.input.value) {

                    _this.displayString =
                        _this.displayString.slice(0, i) +
                        currentChar +
                        _this.displayString.slice(i + 1, _this.displayString.length);

                    gameController.word.textContent = _this.displayString;
                }
            }

            //Solved puzzle?
            if (!gameController.word.textContent.includes('_')) {
                _this.win();
            }
        } else {
            _this.chances--;
            gameController.chances.textContent = _this.chances;

            if (_this.chances == 0) {
                _this.lose();
            }
        }
      gameController.input.value = '';
    };

    this.win = function () {
        if (confirm('Excellent! Play again?')) {
            this.setup();
        }
    };

    this.lose = function () {
       if (confirm('Watch More Movies and Try again?')) {
          this.setup();
        }
    };
};


var game = new Hangman();
game.run();