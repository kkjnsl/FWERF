var events = require('events');
var eventEmitter = new events.EventEmitter();
var connectHandler = function connected() {
console.log('connection succesful.');
eventEmitter.emit('data_received');
}
eventEmitter.on('connection', connectHandler);
console.log('data received succesfully.');
eventEmitter.emit('connection');
console.log("Program Ended.");