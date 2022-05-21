const inputYear = '1991';

// Number is a function available on JS
// Type conversion
console.log(Number(inputYear));

console.log(inputYear + 18); // Here, as inputYear is still a string. Hence, the sign + will concatenate 

console.log(Number('Caroline'));
// NaN - Invalid number
//  typeof NaN => number (Means invalid)

// Type coercion
// JS will automatically convert a value
console.log('I am ' + 39 + ' years old.');  // + operator triggers coercion of 39 (number) to a string
console.log('23' - '10' - 3); // - operators triggers conversion from string to numbers
console.log('23' + '10' + 3); // Concatenation