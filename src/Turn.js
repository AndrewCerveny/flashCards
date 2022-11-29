class Turn {
	constructor( guess,cardObj) {
		this.userGuess = guess;
		this.currentCard = cardObj;
  }
	returnGuess(){
		return this.userGuess
	}
	returnCard(){
		return this.currentCard
	}
}

module.exports = Turn