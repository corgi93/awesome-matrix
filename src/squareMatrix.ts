enum MatrixInfo {
    leftUpwardRightTriangle = 1,
    rightUpwardRightTriangle,
    pyramidMatrix,
    leftDownwardRightTriangle,
    rightDownwardRightTriangle
}

export function squareMatrix(degree: number, pattern: MatrixInfo): any {
    switch (pattern) {
        case 1:
            return leftUpwardRightTriangle(degree);
        case 2:
            return rightUpwardRightTriangle(degree);
        case 3:
            return pyramidMatrix(degree);
        case 4:
            return leftDownwardRightTriangle(degree);
        case 5:
            return rightDownwardRightTriangle(degree);
    }
}

//첫 번째 패턴
function leftUpwardRightTriangle(degree: number): Array<Array<string>> {
    const twoDimensionArray: Array<Array<string>> = [];

    for (let r = 0; r < degree; r++) {
        twoDimensionArray[r] = [];
        for (let c = 0; c < degree; c++) {
            if (c > r) {
                twoDimensionArray[r][c] = " ";
            } else {
                twoDimensionArray[r][c] = "*";
            }
        }
    }
    return twoDimensionArray;
}

//두 번째 패턴
function rightUpwardRightTriangle(degree: number): Array<Array<string>> {
    const twoDimensionArray: Array<Array<string>> = [];
    for (let r = 0; r < degree; r++) {
        twoDimensionArray[r] = [];
        for (let c = 0; c < degree; c++) {
            if (r + c >= degree - 1) {
                twoDimensionArray[r][c] = "*";
            } else {
                twoDimensionArray[r][c] = " ";
            }
        }
    }
    return twoDimensionArray;
}

// 세 번쨰 패턴
function pyramidMatrix(degree: number): Array<Array<string>> {
    const floor = Math.floor(degree / 2);
    const twoDimensionArray: Array<Array<string>> = [];

    if (degree % 2 == 0) {
        throw new Error('even degree could not make pyramid');
    }
    try {
        for (let r = 0; r < degree; r++) {
            twoDimensionArray[r] = [];
            for (let c = 0; c < degree; c++) {
                const sum = r + c;
                const sub = c - r;

                if (r <= floor) {
                    if ((sum >= floor) && (sub <= floor)) {
                        twoDimensionArray[r][c] = "*";
                    } else {
                        twoDimensionArray[r][c] = " ";
                    }
                } else {
                    twoDimensionArray[r][c] = " ";
                }
            }
        }
    } catch (e) {
        console.log(e);
    }
    return twoDimensionArray;
}

//네 번째 패턴
function leftDownwardRightTriangle(degree: number): Array<Array<string>> {
    const twoDimensionArray: Array<Array<string>> = [];

    for (let r = 0; r < degree; r++) {
        twoDimensionArray[r] = [];
        for (let c = 0; c < degree; c++) {
            if (r + c <= degree - 1) {
                twoDimensionArray[r][c] = "*";
            } else {
                twoDimensionArray[r][c] = " ";
            }
        }
    }
    return twoDimensionArray;
}

//다섯 번째 패턴
function rightDownwardRightTriangle(degree: number): Array<Array<string>> {
    const twoDimensionArray: Array<Array<string>> = [];

    for (let r = 0; r < degree; r++) {
        twoDimensionArray[r] = [];
        for (let c = 0; c < degree; c++) {
            if (c < r) {
                twoDimensionArray[r][c] = " ";
            } else {
                twoDimensionArray[r][c] = "*";
            }
        }
    }
    return twoDimensionArray;
}
