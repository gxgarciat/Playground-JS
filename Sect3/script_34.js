'use strict'; // this will add strict mode (secure) to our JS file. It needs to be placed first.
// without using strict mode, it won't show up the error.

// Functions
// A piece of code that we can reuse 
// KEEP YOUR CODE DRY: Don't repeat yourself

// Function declaration
function calcAge1(birthYear){
    return 2037 - birthYear

}

const age1 = calcAge1(1991);
console.log(age1)

// // Function expression - anonymous function
const calcAge2 = function (birthYear){
    return 2037 - birthYear
}

const age2 = calcAge2(1991);

console.log(age1,age2);