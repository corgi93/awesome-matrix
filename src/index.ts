import readline from "readline-sync";
import { squareMatrix } from "./squareMatrix";

const inputPattern: string = readline.question("Enter pattern(case 0 - 4): ");
const inputDegree: string = readline.question("Enter degree: ");
const pattern = Number(inputPattern);
const degree = Number(inputDegree);

if (isNaN(pattern && degree)) {
    console.log("patterns and degree must be a number.");
} else {
    if(pattern < 0 || pattern > 4){
        console.log("please enter a pattern number between 0 and 4");
    }else{
        console.log(squareMatrix(degree, pattern));
    }
}
