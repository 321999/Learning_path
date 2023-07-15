// make the real time chart application
// "type":"module",   
import { EventEmitter } from 'node:events';

class MyEmitter extends EventEmitter {}
// class MyEmitter extends EventEmitter{}

// // const emitter=new MyEmitter()
// // emitter.on("event",()=>{
// //   console.log("event chal rha hi very good")
// //   setTimeout(()=>{
// //     console.log("evetnt still ocuuting after 3seconds")
// //   },3000)
// // })

const myEmitter = new MyEmitter();//MyEmitter se call kiya
myEmitter.on('waterfull', () => {
  console.log('pls turn off the motor!');
  setTimeout(function(){
    console.log("this is the gentle reminder,turn of the motor")
  },3000)//after 3 second the msg which is inside gets printed
});
// myEmitter.emit('event');
console.log("the script is still running")
myEmitter.emit('waterfull');
