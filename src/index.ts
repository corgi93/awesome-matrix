import readline from "readline-sync";
import {squareMatrix} from "./squareMatrix";

const inputNumber: string = readline.question("Enter number: ");
const value = Number(inputNumber);

if (isNaN(value)) {
    console.log("this is not a number. please enter number");
} else if (value) {
    console.log(squareMatrix(value));
}

