var hangmanAppModule = angular.module('hangmanApp', []);

hangmanAppModule.controller('hangmanCtrl', function($scope) {
	this.fails = 0;
	this.tries = 4;
	this.letterChoice = "";
	this.lettersUsed = [''];
	this.uncovered = '';
	this.word = "commandalkon";
	this.discovered = new Array();	

	this.reset = function reset(){
		this.fails = 0;
		this.lettersUsed = [''];
		this.uncovered = '';
		this.discovered = new Array;
		}
	this.tick = function tick (){
		if (this.letterCheck() == true) {
			this.lettersUsed.push(this.letterChoice);
					if (this.word.indexOf(this.letterChoice) == -1) {
						this.fails = this.fails + 1;
						if (this.fails >= this.tries) { 
							if (confirm("You've LOST\nPlay again?") == true) {
								this.reset();
							}
						}
					}
					else {
						this.letterInsert(this.letterChoice);
						if (this.uncovered.length == this.word.length) { 
							if (confirm("YOU'VE WON\nPlay again?") == true) {
								this.reset();
							}
						}

					}
				}
	}

	this.letterCheck = function letterCheck() {
		for (i=0;i <= this.lettersUsed.length;i++) {
			if (this.letterChoice == this.lettersUsed[i]) {
				window.alert("You've already tried this letter before!");
				return false;
			}
	}
		return true;
	}

	this.letterInsert = function letterInsert(letter) {
		var index = this.word.indexOf(letter);
		while (!(index == -1)) {
			this.discovered[index] = letter;
			index = this.word.indexOf(letter, index + 1);
			this.uncovered = this.discovered.join('');
		}
	}
});