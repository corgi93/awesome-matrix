enum MatrixInfo {
    LeftUpwardRightTriangle,
    RightUpwardRightTriangle,
    PyramidMatrix,
    LeftDownwardRightTriangle,
    RightDownwardRightTriangle,
}

export class Matrix {
    public squareMatrix(degree: number, pattern: MatrixInfo): string[][] {
        switch (pattern) {
            case MatrixInfo.LeftUpwardRightTriangle:
                return this.leftUpwardRightTriangle(degree)
            case MatrixInfo.RightUpwardRightTriangle:
                return this.rightUpwardRightTriangle(degree)
            case MatrixInfo.PyramidMatrix:
                return this.pyramidMatrix(degree)
            case MatrixInfo.LeftDownwardRightTriangle:
                return this.leftDownwardRightTriangle(degree)
            case MatrixInfo.RightDownwardRightTriangle:
                return this.rightDownwardRightTriangle(degree)
        }
    }

    public leftUpwardRightTriangle(degree: number): string[][] {
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

    public rightUpwardRightTriangle(degree: number): string[][] {
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

    public pyramidMatrix(degree: number): string[][] {
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

    public leftDownwardRightTriangle(degree: number): string[][] {
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

    public rightDownwardRightTriangle(degree: number): string[][] {
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
}
