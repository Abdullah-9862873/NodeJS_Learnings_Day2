import { EventEmitter } from 'node:events';

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('waterFull', () => {
  console.log('Please turn off the motor');
  setTimeout(() => {
    console.log("A gentle reminder")
  }, 3000);
});

console.log("Script is running");
console.log("Script is still running");


// Now here when the waterFull event gets triggered then the console.log thing will get displayed on screen but
// when it is not running then the script is running and is not stopping
// Event emmitter allows to trigger the event


myEmitter.emit('waterFull');