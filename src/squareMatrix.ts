interface IMatrixInfo {
    twoDimensionArrayLogic(degree: number): string[][]
}

abstract class MatrixCharacter {
    public stringShape: string

    constructor(stringShape: string) {
        this.stringShape = stringShape
    }
}
export class LeftUpwardRightTriangle extends MatrixCharacter implements IMatrixInfo {
    public twoDimensionArrayLogic(degree: number): string[][] {
        const twoDimensionArray: string[][] = []
        for (let r = 0; r < degree; r++) {
            twoDimensionArray[r] = []
            for (let c = 0; c < degree; c++) {
                if (c > r) {
                    twoDimensionArray[r][c] = ' '
                } else {
                    twoDimensionArray[r][c] = this.stringShape
                }
            }
        }
        return twoDimensionArray
    }
}
export class RightUpwardRightTriangle extends MatrixCharacter implements IMatrixInfo {
    public twoDimensionArrayLogic(degree: number): string[][] {
        const twoDimensionArray: string[][] = []
        for (let r = 0; r < degree; r++) {
            twoDimensionArray[r] = []
            for (let c = 0; c < degree; c++) {
                if (r + c >= degree - 1) {
                    twoDimensionArray[r][c] = this.stringShape
                } else {
                    twoDimensionArray[r][c] = ' '
                }
            }
        }
        return twoDimensionArray
    }
}
export class PyramidTriangle extends MatrixCharacter implements IMatrixInfo {
    public twoDimensionArrayLogic(degree: number): string[][] {
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
                        twoDimensionArray[r][c] = this.stringShape
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
}
export class LeftDownwardRightTriangle extends MatrixCharacter implements IMatrixInfo {
    public twoDimensionArrayLogic(degree: number): string[][] {
        const twoDimensionArray: string[][] = []
        for (let r = 0; r < degree; r++) {
            twoDimensionArray[r] = []
            for (let c = 0; c < degree; c++) {
                if (r + c <= degree - 1) {
                    twoDimensionArray[r][c] = this.stringShape
                } else {
                    twoDimensionArray[r][c] = ' '
                }
            }
        }
        return twoDimensionArray
    }
}
export class RightDownwardRightTriangle extends MatrixCharacter implements IMatrixInfo {
    public twoDimensionArrayLogic(degree: number): string[][] {
        const twoDimensionArray: string[][] = []
        for (let r = 0; r < degree; r++) {
            twoDimensionArray[r] = []
            for (let c = 0; c < degree; c++) {
                if (c < r) {
                    twoDimensionArray[r][c] = ' '
                } else {
                    twoDimensionArray[r][c] = this.stringShape
                }
            }
        }
        return twoDimensionArray
    }
}
