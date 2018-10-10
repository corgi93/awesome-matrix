export interface IMatrixStrategy {
    twoDimensionArrayLogic(degree: number, stringShape: string | number): string[][]
}

export class Matrix {
    private readonly shapeCharacter: string | number
    private readonly pattern: IMatrixStrategy

    constructor(shapeCharacter: string | number, pattern: IMatrixStrategy) {
        this.shapeCharacter = shapeCharacter
        this.pattern = pattern
    }

    public executePattern(degree: number): string[][] {
        return this.pattern.twoDimensionArrayLogic(degree, this.shapeCharacter)
    }
}
