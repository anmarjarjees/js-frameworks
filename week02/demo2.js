/* 
Notice that the code below is just a quick summary,
for more reading with full detailed comments:
Link: https://github.com/anmarjarjees/node.js-start/tree/main/2.events
*/

// Events and Callback Functions Concepts:

/* 
Events:
*******
process.on( calling a built-in event, CB )
EventEmitter( create and call our custom event, CB )

Link: https://nodejs.org/api/process.html#process-event
Link: https://nodejs.org/api/events.html#class-eventemitter
*/

// For simplicity, examining the two node js events:
// Event: 'beforeExit'
// Event: 'exit'

// Anonymous Arrow function => Used as CB (Callback Function)
() => {

}

// FIRST: STARING WITH NODE EVENTS:
// ********************************
// process.on(arg1,arg2)
// process.on('built-in event-name', cb);
/* 
process.on('nodeEvent',() => {
    console.log("My message goes here!");
});  
*/

// "beforeExit" and  "exit"
process.on('exit', function () {
    console.log("Take care and have a good day!");
});

process.on('beforeExit', function () {
    console.log("Don't forget to always review the lecture code :-)");
});

process.on('beforeExit', () => console.log("Good luck to all!"));


// SECOND: ENDING WITH CREATING OWN OUR CUSTOM EVENTS:
// **************************************************
// Link: https://nodejs.org/en/learn/asynchronous-work/the-nodejs-event-emitter

/* 
require() and import
*/
// 1) import,require,insert,include,add a class "EventEmitter":
// Way1: CJS => Common JavaScript => require()
const EventEmitter = require('node:events');

// Way2: ESM  => ECMAScript Module (ES Module) => import next week :-)
// import { EventEmitter } from 'node:events';

// Testing the EventEmitter class
// console.log("Testing: ", EventEmitter);

let myEvent = new EventEmitter();

// Creating an event named "drive":
myEvent.on('drive', () => console.log("Start driving your car!"));

// Calling our event:
myEvent.emit('drive');

// Task: use your imagination to create an event named "fly" :-)

