const chai = require('chai');
const expect = chai.expect;

const {Card} = require('../src/Card.js')
const {Deck} = require('../src/Deck.js')

describe('Deck Class', function(){
    let card1, card2,card3
    beforeEach(function() {
        card1 = new Card(1,"What allows you to define a set of related information using key-value pairs?",["object", "array", "function"],"object")
        card2 = new Card(2,"What is a comma-separated list of related values?",["array", "object", "function"],"array")
        card3 = new Card(3,"What type of prototype method directly modifies the existing array?",["mutator method", "accessor method", "iteration method"],"mutator method")
    })
    
    it('Should be a function', function() {
        expect(Deck).to.be.a('Function')
    })
        
    it('Should create an instance',function(){
        let deck = new Deck()
        expect(deck).to.be.an.instanceOf(Deck)
    })

    it('Should start with an array of cards', function(){
        let deck = new Deck([card1,card2,card3])
        expect(deck.cardStack).to.deep.equal(
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
    
    it('Should be able to count how many cards on are in the deck', function() {
         let deck = new Deck([card1,card2,card3])
        expect(deck.countCards()).to.equal(3)
    })
   

    
}) 





 


