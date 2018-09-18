console.log("Hello, World");


function twoDimenArray(ROW: number, COL: number) {
    const myArr:string[] = [];
    for (let r = 0; r < ROW; r++) {
        console.log(myArr[r]);
        for (let c = 0; c < COL; c++) {
            console.log(myArr[r][c]);
        }
    }
}

twoDimenArray(2, 5);




