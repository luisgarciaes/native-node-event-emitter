var Emitter = require('./emitter');

var emtr = new Emitter();

emtr.on('greet', () => {
    console.log('Somewhere, someone said hello');
});
emtr.on('greet', () => {
    console.log('A greeting ocurred!');
});

emtr.on('jump', ()=> {
    console.log('someone jumped!');
});
console.log(emtr) //prints the function

emtr.emit('jump'); //calls the function


console.log('Hell!'); //prints 'Hell!' to the console

emtr.emit('greet'); //prints both greetings to the console

console.log(emtr.emit) // anon function
