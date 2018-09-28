/*
 * lesson2
*/
import readline from "readline-sync";
import {squareMatrix} from "./squareMatrix";

export const inputNumber: string = readline.question("Enter number: ");

if (isNaN(Number(inputNumber))) {
    console.log("this is not a number. please enter number");
} else if (Number(inputNumber)) {
    Number(inputNumber);}

console.log(squareMatrix(Number(inputNumber)));
