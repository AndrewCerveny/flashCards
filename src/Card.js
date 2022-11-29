class Card {
    constructor(num,question,selections,correctAnswer) {
        this.id = num;
        this.question = question;
        this.answers = selections;
        this.correctAnswer = correctAnswer

    }
}

module.exports = {Card};