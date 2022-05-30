'use strict'; // this will add strict mode (secure) to our JS file. It needs to be placed first.
// without using strict mode, it won't show up the error.

// Functions - additional revision
// Calling functions inside other functions

const calcAge = function (birthYeah){
    return 2037 - birthYeah;
}

const yearsUntilRetirement = function (birthYeah,firstName) {
    const age = calcAge(birthYeah);
    const retirement = 65 - age;
    //return `${firstName} retires in ${retirement} years.`
    if (retirement > 0){
        return `${firstName} retires in ${retirement} years.`
        return retirement;
    } else {
        return `${firstName} has already retired.`
        return -1;
    }
    
}

console.log(yearsUntilRetirement(1991,'Jonas'));
console.log(yearsUntilRetirement(1950,'Mike'));