export interface IMatrixStrategy {
    twoDimensionArrayLogic(degree: number, stringShape: string | number): string[][]
}
export class Matrix {
    private readonly stringShape: string | number
    private readonly pattern: IMatrixStrategy

    constructor(stringShape: string | number, pattern: IMatrixStrategy) {
        this.stringShape = stringShape
        this.pattern = pattern
    }
    public executePattern(degree: number): string[][] {
        return this.pattern.twoDimensionArrayLogic(degree, this.stringShape)
    }
}
