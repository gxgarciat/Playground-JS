
// Rules. Two teams, Dolphin and Koalas
// They compete against each other three times
// Calculate the average for each team
// Compare the average to determine the winner of the competition.
// The result can also be a draw 


// Operations
const resDolp_1 = 97
const resDolp_2 = 112
const resDolp_3 = 101

const resKoalas_1 = 109
const resKoalas_2 = 95
const resKoalas_3 = 123

let averageDol = (resDolp_1 + resDolp_2 + resDolp_3) / 3
let averageKoal = (resKoalas_1 + resKoalas_2 + resKoalas_3) / 3

// console.log(averageDol)
// console.log(averageKoal)

if(averageDol > averageKoal && ((resDolp_1 > 100) || (resDolp_2 > 100) || (resDolp_3 > 100))) {
    const message = `Dolphins (${averageDol}) are the winners of the season against Koalas (${averageKoal}).`; 
    console.log(message);

} else if (averageDol === averageKoal){
    const message = `There is a draw between Dolphins (${averageDol}) and the Koalas (${averageKoal}).`; 
    console.log(message);
} else if (averageKoal > averageDol && ((resKoalas_1 > 100) || (resKoalas_2 > 100) || (resKoalas_3 > 100))){
        const message = `Koalas (${averageKoal}) are the winners the season against Dolphins (${averageDol}).`; 
        console.log(message);
    }

