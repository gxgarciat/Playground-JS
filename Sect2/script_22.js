// Equality Operators == vs ===

const age = 18;
if (age === 18) console.log('You just become an adult. (Strict)');

// === strict equality operator
// == loose equality operator. It does type coercion

if (age == 18) console.log('You just become an adult. (Loose)');

// To input a value: prompt
const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log('Great! 23 is an amazing number.')
} else if (favourite === 7){
    console.log('Number 7 is also a cool number.')
} else {
    console.log('Number is not 23 or 7.')
}

// Different operator !==
if (favourite !== 23) console.log('Why not 23?');
