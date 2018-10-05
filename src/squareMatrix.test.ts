import { Matrix } from './squareMatrix'

describe('squareMatrix test', () => {
    it('should be 7 degree matrix when given degree = 7 & pattern = leftUpwardRightTriangle ', () => {
        const matrix = new Matrix()
        expect(matrix.squareMatrix(7, 0)).toEqual([
            ['*', ' ', ' ', ' ', ' ', ' ', ' '],
            ['*', '*', ' ', ' ', ' ', ' ', ' '],
            ['*', '*', '*', ' ', ' ', ' ', ' '],
            ['*', '*', '*', '*', ' ', ' ', ' '],
            ['*', '*', '*', '*', '*', ' ', ' '],
            ['*', '*', '*', '*', '*', '*', ' '],
            ['*', '*', '*', '*', '*', '*', '*'],
        ])
    })
    it('should be 4 degree matrix when given degree = 4 & pattern = rightUpwardRightTriangle', () => {
        const matrix = new Matrix()
        expect(matrix.squareMatrix(4, 1)).toEqual([
            [' ', ' ', ' ', '*'],
            [' ', ' ', '*', '*'],
            [' ', '*', '*', '*'],
            ['*', '*', '*', '*'],
        ])
    })
    it('should be 5 degree matrix when given degree = 5 & pattern = pyramidMatrix', () => {
        const matrix = new Matrix()
        expect(matrix.squareMatrix(5, 2)).toEqual([
            [' ', ' ', '*', ' ', ' '],
            [' ', '*', '*', '*', ' '],
            ['*', '*', '*', '*', '*'],
            [' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' '],
        ])
    })
    it('should be 6 degree matrix when given degree = 6 & pattern = leftDownwardRightTriangle', () => {
        const matrix = new Matrix()
        expect(matrix.squareMatrix(6, 3)).toEqual([
            ['*', '*', '*', '*', '*', '*'],
            ['*', '*', '*', '*', '*', ' '],
            ['*', '*', '*', '*', ' ', ' '],
            ['*', '*', '*', ' ', ' ', ' '],
            ['*', '*', ' ', ' ', ' ', ' '],
            ['*', ' ', ' ', ' ', ' ', ' '],
        ])
    })
    it('should be 6 degree matrix when given degree = 6 & pattern = rightDownwardRightTriangle', () => {
        const matrix = new Matrix()
        expect(matrix.squareMatrix(6, 4)).toEqual([
            ['*', '*', '*', '*', '*', '*'],
            [' ', '*', '*', '*', '*', '*'],
            [' ', ' ', '*', '*', '*', '*'],
            [' ', ' ', ' ', '*', '*', '*'],
            [' ', ' ', ' ', ' ', '*', '*'],
            [' ', ' ', ' ', ' ', ' ', '*'],
        ])
    })
})
