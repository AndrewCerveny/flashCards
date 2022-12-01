const data = require('../src/data')
const {prototypeData} = require('../src/data');
const {harryPotter} = require('../src/sampleData')
const { Card } = require('./Card');
const { Deck } = require('./Deck');



const { Round } = require('./Round');
const util = require('./util');

class Game {
  constructor(dataSet) {
    this.currentRound = null
    this.data = dataSet
    this.deck = null
 
    
  }
  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
  
  makeCards(){
    const playingCards = this.data.map((dataPoint)=>new Card(dataPoint.id,dataPoint.question,dataPoint.answers,dataPoint.correctAnswer))
    return playingCards
  }
  makeDeck(){
   this.deck = new Deck(this.makeCards())
  return this.deck
  }
  makeRound(){
    this.currentRound = new Round(this.makeDeck())
    return this.currentRound
  }
  start(){
   this.printMessage(this.makeDeck(),this.makeRound())
   this.printQuestion(this.makeRound())
   
  }
}

module.exports = {Game};