// Boolean logic: AND, OR, NOT operators

// age = 16
// A: Age is greater or equal 20 => false
// B: Age is less than 30 => true
// // !A => true
// A AND B => false
// A OR B => true
// !A AND B => true
// A OR !B  => false

const hasDriverLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

const shouldDrive = hasDriverLicense && hasGoodVision;

if (shouldDrive){
    console.log('Sarah is able to drive!');
} else{
    console.log('Someone else should drive...')
}

const isTired = false;
console.log(hasDriverLicense && hasGoodVision && isTired)