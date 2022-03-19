//var Emitter = require('./emitter');
var Emitter = require('events'); // it changed from a Function:anonymous to Function:emit
var Config = require('config');

var config = new Config();
var emtr = new Emitter();

emtr.on(config.events.GREET, () => {
    console.log('Somewhere, someone said hello');
});
emtr.on(config.events.JUMP, () => {
    console.log('A greeting ocurred!');
});

emtr.on(config.events.JUMP, ()=> {
    console.log('someone jumped!');
});
console.log(emtr) //prints the function

emtr.emit('jump'); //calls the function


console.log('Hell!'); //prints 'Hell!' to the console

emtr.emit('greet'); //prints both greetings to the console

console.log(emtr.emit) // anon function

