import { IMatrixStrategy } from './squareMatrix'

export class LeftUpwardRightTriangle implements IMatrixStrategy {
    public twoDimensionArrayLogic(degree: number, stringShape: string): string[][] {
        const twoDimensionArray: string[][] = []
        for (let r = 0; r < degree; r++) {
            twoDimensionArray[r] = []
            for (let c = 0; c < degree; c++) {
                if (c > r) {
                    twoDimensionArray[r][c] = ' '
                } else {
                    twoDimensionArray[r][c] = stringShape
                }
            }
        }
        return twoDimensionArray
    }
}
