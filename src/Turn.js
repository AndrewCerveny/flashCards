class Turn {
	constructor(guess,cardObj){
		this.userGuess = guess;
		this.currentCard = cardObj
	}
	returnGuess() {
		return this.userGuess
	}
	returnCard() {
		return this.currentCard
	}
	evaluateGuess(){
	 if(this.userGuess === this.currentCard.correctAnswer) {
		return true
	 }else{
		return false
	 }
		
	}
	giveFeedback(){
		if(this.evaluateGuess()){
			return 'correct!'
		}else{
			return 'incorrect!'
		}
	}
}
module.exports = Turn;