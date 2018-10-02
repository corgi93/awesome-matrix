import readline from "readline-sync";
import {squareMatrix} from "./squareMatrix";

const inputNumber: string = readline.question("Enter pattern(case 1 - 5): ");
const inputDegree: string = readline.question("Enter degree: ");
const value = Number(inputNumber);
const degree = Number(inputDegree);

if (isNaN(value)) {
    console.log("this is not a number. please enter number");
} else if (value) {
    console.log(squareMatrix(degree, value));

}

