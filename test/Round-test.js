const chai = require('chai');
const expect = chai.expect;

const {Card} = require('../src/Card.js')
const {Turn} = require('../src/Turn.js')
const {Deck} = require('../src/Deck.js')
const {Round} = require('../src/Round.js')

describe("Round Class", function(){
    let card1,card2,card3;
    let turn1,turn2,turn3;
    let deck;
  beforeEach(function() {
  	card1 = new Card(1,"What allows you to define a set of related information using key-value pairs?",["object", "array", "function"],"object")
    card2 = new Card(2,"What is a comma-separated list of related values?",["array", "object", "function"],"array")
    card3 = new Card(3,"What type of prototype method directly modifies the existing array?",["mutator method", "accessor method", "iteration method"],"mutator method")

		turn1 = new Turn('function',card1);
		turn2 = new Turn("array",card2);
		turn3 = new Turn("iterator method", card3);

		deck = new Deck([card1,card2,card3])

  })
	it('Should be a function', function() {
		expect(Round).to.be.a('Function')
	})
	
	it('Should make an instance',function() {
		const round = new Round(deck)
		expect(round).to.be.an.instanceOf(Round)
	})

	it('Should contain the deck of playing cards in the parameter', function(){
		const round = new Round(deck)
		expect(round.deck).to.deep.equal(
			[
				{
  			"id": 1,
  			"question": "What allows you to define a set of related information using key-value pairs?",
  			"answers": ["object", "array", "function"],
  			"correctAnswer": "object"
				}, 
				{
				"id": 2,
				"question": "What is a comma-separated list of related values?",
				"answers": ["array", "object", "function"],
				"correctAnswer": "array"
				}, 
				{
				"id": 3,
				"question": "What type of prototype method directly modifies the existing array?",
				"answers": ["mutator method", "accessor method", "iteration method"],
				"correctAnswer": "mutator method"
				}
			])
	})
	
	it('Should hold on to a currentCard', function(){
		const round = new Round(deck)
		expect(round.currentCard).to.deep.equal(
			{
  			"id": 1,
  			"question": "What allows you to define a set of related information using key-value pairs?",
  			"answers": ["object", "array", "function"],
  			"correctAnswer": "object"
			})
	})

	it('Should return the currentCard in play', function(){
		const round = new Round(deck)
		expect(round.returnCurrentCard()).to.deep.equal(
			{
  			"id": 1,
  			"question": "What allows you to define a set of related information using key-value pairs?",
  			"answers": ["object", "array", "function"],
  			"correctAnswer": "object"
			})
	})

	it('Should start with zero turns taken',function(){
		const round = new Round(deck)
		expect(round.turns).to.equal(0)
	})
	
	it('Should be able to hold incorrect guesses', function(){
		const round = new Round(deck)
		expect(round.incorrectGuesses).to.deep.equal([])
	})
	
	it('Should allow players to take turns', function(){
		const round = new Round(deck)
		round.takeTurn("array")
		expect(round.turns).to.equal(1)
	})

	it('Should add a cards ID to incorrect guesses when the user guess is wrong', function(){
		const round = new Round(deck)
		round.takeTurn("array")
		expect(round.incorrectGuesses).to.deep.equal([1])
	})

	it('Should tell a user wether their guess was correct or incorrect',function(){
		const round = new Round(deck)
		expect(round.takeTurn("array")).to.equal('incorrect!')
	})
	it('Should tell a user that their test is correct', function(){
		const round = new Round(deck)
		expect(round.takeTurn("object")).to.equal('correct!')
	})

	it('Should display the next card in the deck', function(){
		const round = new Round(deck)
		round.takeTurn('array')
		const outcome = {
    	id: 2,
    	question: 'What is a comma-separated list of related values?',
    	answers: [ 'array', 'object', 'function' ],
    	correctAnswer: 'array'
  		}
		expect(round.currentCard).to.deep.equal(outcome)
		
	})
	it('Should calculate the percentage of correct answers', function(){
		const round = new Round(deck)
		round.takeTurn('array')
		round.takeTurn('array')
		round.takeTurn('mutator method')
		expect(round.calculatePercentCorrect()).to.equal(66)
	})
	
	it('Should be able to print a message to the console when the game is over', function(){
		const round = new Round(deck)
		round.takeTurn('array')
		round.takeTurn('array')
		round.takeTurn('mutator method')
		round.calculatePercentCorrect()
		expect(round.endRound()).to.equal(`** You answered 66% of the questions correctly!`)

	})

})