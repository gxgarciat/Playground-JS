'use strict'; // this will add strict mode (secure) to our JS file. It needs to be placed first.
// without using strict mode, it won't show up the error.

// Functions
// A piece of code that we can reuse 
// KEEP YOUR CODE DRY: Don't repeat yourself

// Arrow function
const calcAge3 = birthYear => 2037 - birthYear; // Return will happen implicitly
const age3 = calcAge3(1991);
console.log(age3);

// One parameter
const yearsUntilRetirement = birthYear =>{
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return retirement;

}

console.log(yearsUntilRetirement(1991));

// Two parameters
const yearsUntilRetirement2 = (birthYear,firstName) =>{
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years.`

}

console.log(yearsUntilRetirement2(1991,'Jonas'));
console.log(yearsUntilRetirement2(1987,'Dylan'));