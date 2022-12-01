// This is where your project starts.

const { Game } = require("./src/Game");
const{harryPotter} = require("./src/sampleData") 
const {prototypeData} = require('./src/data');
// can play two game types   harryPotter ||  protoTypeData
console.log('Your project is running...'); 
const game = new Game(harryPotter) 
game.start()