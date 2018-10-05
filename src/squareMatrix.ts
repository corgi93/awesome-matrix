enum MatrixInfo {
    LeftUpwardRightTriangle,
    RightUpwardRightTriangle,
    PyramidMatrix,
    LeftDownwardRightTriangle,
    RightDownwardRightTriangle,
}

export function squareMatrix(degree: number, pattern: MatrixInfo): string[][] {
    switch (pattern) {
        case MatrixInfo.LeftUpwardRightTriangle:
            return leftUpwardRightTriangle(degree)
        case MatrixInfo.RightUpwardRightTriangle:
            return rightUpwardRightTriangle(degree)
        case MatrixInfo.PyramidMatrix:
            return pyramidMatrix(degree)
        case MatrixInfo.LeftDownwardRightTriangle:
            return leftDownwardRightTriangle(degree)
        case MatrixInfo.RightDownwardRightTriangle:
            return rightDownwardRightTriangle(degree)
    }
}

// 첫 번째 패턴
function leftUpwardRightTriangle(degree: number): string[][] {
    const twoDimensionArray: string[][] = []
    for (let r = 0; r < degree; r++) {
        twoDimensionArray[r] = []
        for (let c = 0; c < degree; c++) {
            if (c > r) {
                twoDimensionArray[r][c] = ' '
            } else {
                twoDimensionArray[r][c] = '*'
            }
        }
    }
    return twoDimensionArray
}

// 두 번째 패턴
function rightUpwardRightTriangle(degree: number): string[][] {
    const twoDimensionArray: string[][] = []
    for (let r = 0; r < degree; r++) {
        twoDimensionArray[r] = []
        for (let c = 0; c < degree; c++) {
            if (r + c >= degree - 1) {
                twoDimensionArray[r][c] = '*'
            } else {
                twoDimensionArray[r][c] = ' '
            }
        }
    }
    return twoDimensionArray
}

// 세 번쨰 패턴
function pyramidMatrix(degree: number): string[][] {
    const floor = Math.floor(degree / 2)
    const twoDimensionArray: string[][] = []
    if (degree % 2 === 0) {
        throw new Error('even degree could not make pyramid')
    }
    for (let r = 0; r < degree; r++) {
        twoDimensionArray[r] = []
        for (let c = 0; c < degree; c++) {
            const sum = r + c
            const sub = c - r
            if (r <= floor) {
                if (sum >= floor && sub <= floor) {
                    twoDimensionArray[r][c] = '*'
                } else {
                    twoDimensionArray[r][c] = ' '
                }
            } else {
                twoDimensionArray[r][c] = ' '
            }
        }
    }
    return twoDimensionArray
}

// 네 번째 패턴
function leftDownwardRightTriangle(degree: number): string[][] {
    const twoDimensionArray: string[][] = []
    for (let r = 0; r < degree; r++) {
        twoDimensionArray[r] = []
        for (let c = 0; c < degree; c++) {
            if (r + c <= degree - 1) {
                twoDimensionArray[r][c] = '*'
            } else {
                twoDimensionArray[r][c] = ' '
            }
        }
    }
    return twoDimensionArray
}

// 다섯 번째 패턴
function rightDownwardRightTriangle(degree: number): string[][] {
    const twoDimensionArray: string[][] = []
    for (let r = 0; r < degree; r++) {
        twoDimensionArray[r] = []
        for (let c = 0; c < degree; c++) {
            if (c < r) {
                twoDimensionArray[r][c] = ' '
            } else {
                twoDimensionArray[r][c] = '*'
            }
        }
    }
    return twoDimensionArray
}
