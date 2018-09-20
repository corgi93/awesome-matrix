/*
 * lesson2
 */
import readline from "readline-sync";



const inputRows: any = readline.question("Enter Rows: ");
const inputCols: any = readline.question("Enter Cols: ");


function printStarArray(rows: number, cols: number): Array<Array<string>> {
    const twoDimensionArray: Array<Array<string>> = [];
    for (let r = 0; r < rows; r++) {
        twoDimensionArray[r] = [];
        for (let c = 0; c < cols; c++) {
            twoDimensionArray[r][c] = "*";
        }
    }
    return twoDimensionArray;
}


console.log(printStarArray(inputRows, inputCols));