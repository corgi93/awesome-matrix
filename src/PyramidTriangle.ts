import { IMatrixStrategy } from './squareMatrix'

export class PyramidTriangle implements IMatrixStrategy {
    public twoDimensionArrayLogic(degree: number, stringShape: string): string[][] {
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
                        twoDimensionArray[r][c] = stringShape
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
