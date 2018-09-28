import readline from "readline-sync";
import {squareMatrix} from "./squareMatrix";

export const inputNumber: string = readline.question("Enter number: ");
let value = Number(inputNumber);

if (isNaN(value)) {
    console.log("this is not a number. please enter number");

} else if (value) {
    console.log(squareMatrix(value));
}

