const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card.js')
const Turn = require('../src/Turn.js')


describe("Turn Class", function() {
    let card1, card2
    
    beforeEach(function() {
    
    card1 = new Card(1,"What allows you to define a set of related information using key-value pairs?",["object", "array", "function"],"object" )

    card2 = new Card( 2, "What is a comma-separated list of related values?",["array", "object", "function"],"array")
   
    })
  
    it("Should be a function", function(){
        expect(Turn).to.be.a('Function')
    })

    it("Should make an instance", function(){
        let turn = new Turn();
        expect(turn).to.be.an.instanceOf(Turn)
    })

    it('Should take in a userGuess and Card object', function(){
        let turn = new Turn('function',card1)
        expect(turn.userGuess).to.equal('function')
    })

    it('Should take in a currentCard', function(){
        let turn = new Turn('function', card1)
        expect(turn.currentCard).to.deep.equal(
        {
            "id": 1,
            "question": "What allows you to define a set of related information using key-value pairs?",
            "answers": ["object", "array", "function"],
            "correctAnswer": "object"
	    }, 
        )
    })

    it('Should be able to return a users guess', function(){
        let turn = new Turn('function', card1)
        expect(turn.returnGuess()).to.equal('function')
    })
    
    it('Should be able to return the card in play', function() {
        let turn = new Turn('function', card1)
        expect(turn.returnCard()).to.deep.equal(
        	{
            "id": 1,
            "question": "What allows you to define a set of related information using key-value pairs?",
            "answers": ["object", "array", "function"],
            "correctAnswer": "object"
	    		}
        	)
    })
		
})  
