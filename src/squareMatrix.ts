interface MatrixInfo {
    leftUpwardRightTriangle(degree: number): string[][]
    rightUpwardRightTriangle(degree: number): string[][]
    pyramidMatrix(degree: number): string[][]
    leftDownwardRightTriangle(degree: number): string[][]
    rightDownwardRightTriangle(degree: number): string[][]
}

export class Matrix implements MatrixInfo {
    public shape: string
    public pattern: number
    constructor(shape: string, pattern: number) {
        this.shape = shape
        this.pattern = pattern
    }
    // 크기만 인자로 받도록.
    public squareMatrix(degree: number): any {
        if (this.pattern === 1) {
            return this.leftUpwardRightTriangle(degree)
        } else if (this.pattern === 2) {
            return this.rightUpwardRightTriangle(degree)
        } else if (this.pattern === 3) {
            return this.pyramidMatrix(degree)
        } else if (this.pattern === 4) {
            return this.leftDownwardRightTriangle(degree)
        } else if (this.pattern === 5) {
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
                    twoDimensionArray[r][c] = this.shape
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
                    twoDimensionArray[r][c] = this.shape
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
                        twoDimensionArray[r][c] = this.shape
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
                    twoDimensionArray[r][c] = this.shape
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
                    twoDimensionArray[r][c] = this.shape
                }
            }
        }
        return twoDimensionArray
    }
}

const matrixLeftUpwardRightTriangle = new Matrix('@', 1)
const matrixRightUpwardRightTriangle = new Matrix('L', 2)
const matrixDollarPyramid = new Matrix('$', 3)
const matrixLeftDownwardRightTriangle = new Matrix('#', 4)
const matrixRightDownwardRightTriangle = new Matrix('^V^', 5)

matrixLeftUpwardRightTriangle.squareMatrix(6)
matrixRightUpwardRightTriangle.squareMatrix(4)
matrixDollarPyramid.squareMatrix(5)
matrixLeftDownwardRightTriangle.squareMatrix(7)
matrixRightDownwardRightTriangle.squareMatrix(5)