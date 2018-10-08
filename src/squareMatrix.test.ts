import { Matrix } from './squareMatrix'

describe('squareMatrix test', () => {
    it('should be 7 degree matrix printing `%` when given degree = 7 & pattern = 1(leftUpwardRightTriangle) ', () => {
        const matrix = new Matrix('%', 1)
        expect(matrix.squareMatrix(7)).toEqual([
            ['%', ' ', ' ', ' ', ' ', ' ', ' '],
            ['%', '%', ' ', ' ', ' ', ' ', ' '],
            ['%', '%', '%', ' ', ' ', ' ', ' '],
            ['%', '%', '%', '%', ' ', ' ', ' '],
            ['%', '%', '%', '%', '%', ' ', ' '],
            ['%', '%', '%', '%', '%', '%', ' '],
            ['%', '%', '%', '%', '%', '%', '%'],
        ])
    })
    it('should be 4 degree matrix printing `@` when given degree = 4 & pattern = 2(rightUpwardRightTriangle)', () => {
        const matrix = new Matrix('@', 2)
        expect(matrix.squareMatrix(4)).toEqual([
            [' ', ' ', ' ', '@'],
            [' ', ' ', '@', '@'],
            [' ', '@', '@', '@'],
            ['@', '@', '@', '@'],
        ])
    })
    it('should be 5 degree matrix printing `K` when given degree = 5 & pattern = 3(pyramidMatrix)', () => {
        const matrix = new Matrix('K', 3)
        expect(matrix.squareMatrix(5)).toEqual([
            [' ', ' ', 'K', ' ', ' '],
            [' ', 'K', 'K', 'K', ' '],
            ['K', 'K', 'K', 'K', 'K'],
            [' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' '],
        ])
    })
    it('should be 6 degree matrix printing `$` when given degree = 6 & pattern = 4(leftDownwardRightTriangle)', () => {
        const matrix = new Matrix('$', 4)
        expect(matrix.squareMatrix(6)).toEqual([
            ['$', '$', '$', '$', '$', '$'],
            ['$', '$', '$', '$', '$', ' '],
            ['$', '$', '$', '$', ' ', ' '],
            ['$', '$', '$', ' ', ' ', ' '],
            ['$', '$', ' ', ' ', ' ', ' '],
            ['$', ' ', ' ', ' ', ' ', ' '],
        ])
    })
    it('should be 6 degree matrix printing `*` when given degree = 6 & pattern = 5(rightDownwardRightTriangle)', () => {
        const matrix = new Matrix('*', 5)
        expect(matrix.squareMatrix(6)).toEqual([
            ['*', '*', '*', '*', '*', '*'],
            [' ', '*', '*', '*', '*', '*'],
            [' ', ' ', '*', '*', '*', '*'],
            [' ', ' ', ' ', '*', '*', '*'],
            [' ', ' ', ' ', ' ', '*', '*'],
            [' ', ' ', ' ', ' ', ' ', '*'],
        ])
    })
})
