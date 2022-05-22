
// Constants 
const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;

// Operations
let bmiMark = markWeight / (markHeight * markHeight);
let bmiJohn = johnWeight / (johnHeight * johnHeight);

let markHigherBMI = bmiMark > bmiJohn;

let message;

if(bmiMark > bmiJohn){
    const message = `Mark's BMI (${bmiMark}) is higher than John's BMI (${bmiJohn})`; 
    console.log(message);

} else {
    const message = `John's BMI (${bmiJohn}) is higher than Mark's BMI (${bmiMark})`; 
    console.log(message);

}



// 
// console.log(bmiMark);
// console.log(bmiJohn);
// console.log(markHigherBMI);
