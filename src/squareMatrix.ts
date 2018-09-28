export function squareMatrix(degree: number): Array<Array<string>> {
    const twoDimensionArray: Array<Array<string>> = [];
    for (let r = 0; r < degree; r++) {
        twoDimensionArray[r] = [];
        for (let c = 0; c < degree; c++) {
            if (c <= r) {
                twoDimensionArray[r][c] = "*";
            } else {
                twoDimensionArray[r][c] = " ";
            }
        }
    }
    return twoDimensionArray;
}