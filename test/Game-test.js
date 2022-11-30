const chai = require('chai');
const expect = chai.expect;

const {Card} = require('../src/Card.js')
const {Deck} = require('../src/Deck.js');
const { Game } = require('../src/Game.js');
const {Round} = require('../src/Round')

describe('Game Class', function(){
    let game;
    beforeEach(function(){
        game = new Game()
    })

    it('Should be a function', function() {
        expect(Game).to.be.a('Function')
    })

    it('Should make an instance of game',function(){
       let game = new Game
       expect(game).to.be.an.instanceOf(Game)
    })

    it('Should keep track of the current Round', function(){
        let game = new Game
        expect(game.currentRound).to.equal(null)
    })

    it('Should make the cards that will eventually create deck',function(){
        let game = new Game
    
        expect(game.makeCards().length).to.equal(30)
    })
     
    it('Should make a new Deck',function(){
        let game = new Game
        game.makeDeck()
        expect(game.deck.cardStack.length).to.equal(30)
    })

    it('Should make a new Round', function(){
        let game = new Game
        game.makeRound()
        expect(game.currentRound.turns).to.equal(0)
    })
}) 


