import readline from "readline-sync";
import {fifthMatrix, firstMatrix, fourthMatrix, secondMatrix, squareMatrix, thirdMatrix} from "./squareMatrix";

const inputNumber: string = readline.question("Enter number: ");
const value = Number(inputNumber);

if (isNaN(value)) {
    console.log("this is not a number. please enter number");
} else if (value) {
    console.log(squareMatrix(value));
    console.log(firstMatrix(value));
    console.log(secondMatrix(value));
    console.log(thirdMatrix(value));
    console.log(fourthMatrix(value));
    console.log(fifthMatrix(value));
}

