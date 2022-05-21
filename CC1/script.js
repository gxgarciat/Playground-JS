
// Constants 
const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;

// Operations
let bmiMark = markWeight / (markHeight * markHeight);
let bmiJohn = johnWeight / (johnHeight * johnHeight);

let markHigherBMI = bmiMark > bmiJohn;


// 
console.log(bmiMark);
console.log(bmiJohn);
console.log(markHigherBMI);
