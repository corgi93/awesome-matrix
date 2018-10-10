import {IMatrixStrategy} from './squareMatrix'

export class LeftDownwardRightTriangle implements IMatrixStrategy {
    public twoDimensionArrayLogic(degree: number): string[][] {
        const twoDimensionArray: string[][] = []
        for (let r = 0; r < degree; r++) {
            twoDimensionArray[r] = []
            for (let c = 0; c < degree; c++) {
                if (r + c <= degree - 1) {
                    twoDimensionArray[r][c] = '$'
                } else {
                    twoDimensionArray[r][c] = ' '
                }
            }
        }
        return twoDimensionArray
    }
}
