const {Turn} = require('../src/Turn');

class Round {
 constructor(deckDetail) {
    
 this.deck = deckDetail.cardStack;
 this.turns = 0;
 this.incorrectGuesses = [];
 this.currentCard = deckDetail.cardStack[0];
 }  
 returnCurrentCard() {
    return this.deck[0]
 } 
 takeTurn(userGuess) {
    let turn = new Turn(userGuess,this.currentCard)
    this.turns += 1;
   
    
    if(!turn.evaluateGuess()){
        this.incorrectGuesses.push(turn.currentCard.id)
        this.deck.shift();
        this.currentCard = this.deck[0]
        return turn.giveFeedback()

    }else{
        this.deck.shift()
        this.currentCard = this.deck[0]
       return turn.giveFeedback()
    }
  

  }
  calculatePercentCorrect(){
   const correct = this.turns - this.incorrectGuesses.length 
   const percent = correct / this.turns * 100
   return Math.trunc(percent)
  }
  endRound() {
    const percent = this.calculatePercentCorrect()
    const endMessage = `** You answered ${percent}% of the questions correctly!`
    console.log(endMessage)
    }
}



module.exports = {Round};