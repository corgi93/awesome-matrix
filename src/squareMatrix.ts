export interface IMatrixStrategy {
    twoDimensionArrayLogic(degree: number, stringShape: string): string[][]
}

export class Matrix {
    public stringShape: string
    public pattern: IMatrixStrategy

    constructor(stringShape: string, pattern: IMatrixStrategy) {
        this.stringShape = stringShape
        this.pattern = pattern
    }
    public executePattern(degree: number) {
        return this.pattern.twoDimensionArrayLogic(degree, this.stringShape)
    }
}
