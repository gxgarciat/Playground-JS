// Truthy and falsy values

// Falsy values are those ones that are not false, but will become false once we try to convert into boolean
// 5 Falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Caro'));
console.log(Boolean({}));
console.log(Boolean(''));

// Conversion to boolean is always implicit, not explicit

// Example
const money = 0;
if (money){
    console.log("Don't spend it all");
} else {
    console.log("Get a job")
}