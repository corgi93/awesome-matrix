/*
 * lesson1
 */

const hello: string = "Hello, World";
console.log(hello);


/*
 * lesson2
 */

function printStarArray(rows: number, cols: number): void {
    const myarr: Array<Array<string>> = [];
    for (let r = 0; r < rows; r++) {
        myarr[r] = [];
        for (let c = 0; c < cols; c++) {
            myarr[r][c] = "*";
        }
    }
    console.log(myarr);
}

printStarArray(4, 5);

