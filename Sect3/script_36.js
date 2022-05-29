'use strict'; // this will add strict mode (secure) to our JS file. It needs to be placed first.
// without using strict mode, it won't show up the error.

// Functions
// Calling functions inside other functions

function cutFruitPieces(fruit){
    return fruit*4;
}

function fruitProcessor(apples, oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`
    return juice;
}

console.log(fruitProcessor(2,3));