var hangmanAppModule = angular.module('hangmanApp', []);

hangmanAppModule.controller('hangmanCtrl', function($scope) {
	this.fails = 0;
	this.tries = 4;
	this.word = 'command';
	this.letterChoice = "";
	this.lettersUsed = [''];
	this.discovered = new Array();
	this.uncovered = '';
	this.tick = function tick (){
		if (this.letterCheck() == true) {
			this.lettersUsed.push(this.letterChoice);
					if (this.word.indexOf(this.letterChoice) == -1) {
						this.fails = this.fails + 1;
						if (this.fails >= this.tries) { window.alert("you're dead")}
					}
					else {
						this.letterInsert(this.letterChoice);
						if (this.uncovered.length == this.word.length) { 
							window.alert("YOU'VE WON");
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
			window.alert(index);
			window.alert(this.discovered);
			this.uncovered = this.discovered.join('');
		}
	}
});