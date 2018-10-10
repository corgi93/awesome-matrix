import { IMatrixStrategy } from 'squareMatrix'

export class RightUpwardRightTriangle implements IMatrixStrategy {
    public twoDimensionArrayLogic(
        degree: number,
        stringShape: string,
    ): string[][] {
        const twoDimensionArray: string[][] = []
        for (let r = 0; r < degree; r++) {
            twoDimensionArray[r] = []
            for (let c = 0; c < degree; c++) {
                if (r + c >= degree - 1) {
                    twoDimensionArray[r][c] = stringShape
                } else {
                    twoDimensionArray[r][c] = ' '
                }
            }
        }
        return twoDimensionArray
    }
}
