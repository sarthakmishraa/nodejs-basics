import { EventEmitter } from "events";

const myEmitter = new EventEmitter();

function greetHandler(name) {
    console.log("Hello " + name);
}

function goodbyeHandler(name) {
    console.log("Goodbye " + name);
}

// Event listeners
myEmitter.on('greet', greetHandler);
myEmitter.on('goodbye', goodbyeHandler);

// Emitting events
myEmitter.emit('greet', "Sarthak");
myEmitter.emit('goodbye', "Sarthak");

myEmitter.on('error', (error) => {
    console.log("Error: " + error);
});

myEmitter.emit('error', new Error("Something went wrong"));