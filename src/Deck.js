
class Deck {
    constructor(cards){
        this.cardStack = cards;
    }
    countCards(){
        return this.cardStack.length
    }
}




module.exports = {Deck};