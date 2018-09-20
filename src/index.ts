/*
 * lesson2
 */
var readline = require('readline-sync');

var inputRows: number = readline.question('Enter Rows: ');
var inputCols: number = readline.question('Enter Cols: ');


function printStarArray(rows: number, cols: number): void {
    const twoDimentionArray: Array<Array<string>> = [];
    for (let r = 0; r < rows; r++) {
        twoDimentionArray[r] = [];
        for (let c = 0; c < cols; c++) {
            twoDimentionArray[r][c] = "*";
        }
    }
    console.log(twoDimentionArray);
}


printStarArray(inputRows, inputCols);