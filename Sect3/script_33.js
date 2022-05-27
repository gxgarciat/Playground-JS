'use strict'; // this will add strict mode (secure) to our JS file. It needs to be placed first.
// without using strict mode, it won't show up the error.

// Functions
// A piece of code that we can reuse 
// KEEP YOUR CODE DRY: Don't repeat yourself

function logger(){
    console.log('My name is Will');

}

logger(); // Invoking, calling or running the function
logger();
logger();
logger();

function fruitProcessor(apples,oranges){
    console.log(apples,oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice;
}

const appleJuice = fruitProcessor(5,0);
console.log(appleJuice);

// console.log is a built-in function
// 