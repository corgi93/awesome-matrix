import { LeftDownwardRightTriangle } from 'patterns/leftDownwardRightTriangle'
import { LeftUpwardRightTriangle } from 'patterns/leftUpwardRightTriangle'
import { PyramidTriangle } from 'patterns/pyramidTriangle'
import { RightDownwardRightTriangle } from 'patterns/rightDownwardRightTriangle'
import { RightUpwardRightTriangle } from 'patterns/rightUpwardRightTriangle'
import { SquareMatrix } from 'squareMatrix'

describe('squareMatrix test', () => {
    it('should be 7 degree matrix when given degree = 7 & pattern = leftUpwardRightTriangle', () => {
        const matrix = new SquareMatrix('*', new LeftUpwardRightTriangle())
        expect(matrix.executePattern(7)).toEqual([
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
        const matrix = new SquareMatrix('*', new RightUpwardRightTriangle())
        expect(matrix.executePattern(4)).toEqual([
            [' ', ' ', ' ', '*'],
            [' ', ' ', '*', '*'],
            [' ', '*', '*', '*'],
            ['*', '*', '*', '*'],
        ])
    })
    it('should be 5 degree matrix when given degree = 5 & pattern = pyramidMatrix', () => {
        const matrix = new SquareMatrix('*', new PyramidTriangle())
        expect(matrix.executePattern(5)).toEqual([
            [' ', ' ', '*', ' ', ' '],
            [' ', '*', '*', '*', ' '],
            ['*', '*', '*', '*', '*'],
            [' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' '],
        ])
    })
    it('should be 6 degree matrix when given degree = 6 & pattern = leftDownwardRightTriangle', () => {
        const matrix = new SquareMatrix('*', new LeftDownwardRightTriangle())
        expect(matrix.executePattern(6)).toEqual([
            ['*', '*', '*', '*', '*', '*'],
            ['*', '*', '*', '*', '*', ' '],
            ['*', '*', '*', '*', ' ', ' '],
            ['*', '*', '*', ' ', ' ', ' '],
            ['*', '*', ' ', ' ', ' ', ' '],
            ['*', ' ', ' ', ' ', ' ', ' '],
        ])
    })
    it('should be 6 degree matrix when given degree = 6 & pattern = rightDownwardRightTriangle', () => {
        const matrix = new SquareMatrix('*', new RightDownwardRightTriangle())
        expect(matrix.executePattern(6)).toEqual([
            ['*', '*', '*', '*', '*', '*'],
            [' ', '*', '*', '*', '*', '*'],
            [' ', ' ', '*', '*', '*', '*'],
            [' ', ' ', ' ', '*', '*', '*'],
            [' ', ' ', ' ', ' ', '*', '*'],
            [' ', ' ', ' ', ' ', ' ', '*'],
        ])
    })
    it('should be 7 degree matrix printing `%` when given degree = 7 & pattern = leftUpwardRightTriangle', () => {
        const leftUpwardRightTriangle = new SquareMatrix('%', new LeftUpwardRightTriangle())
        expect(leftUpwardRightTriangle.executePattern(7)).toEqual([
            ['%', ' ', ' ', ' ', ' ', ' ', ' '],
            ['%', '%', ' ', ' ', ' ', ' ', ' '],
            ['%', '%', '%', ' ', ' ', ' ', ' '],
            ['%', '%', '%', '%', ' ', ' ', ' '],
            ['%', '%', '%', '%', '%', ' ', ' '],
            ['%', '%', '%', '%', '%', '%', ' '],
            ['%', '%', '%', '%', '%', '%', '%'],
        ])
    })
    it('should be 4 degree matrix printing `@` when given degree = 4 & pattern = rightUpwardRightTriangle', () => {
        const rightUpwardRightTriangle = new SquareMatrix('@', new RightUpwardRightTriangle())
        expect(rightUpwardRightTriangle.executePattern(4)).toEqual([
            [' ', ' ', ' ', '@'],
            [' ', ' ', '@', '@'],
            [' ', '@', '@', '@'],
            ['@', '@', '@', '@'],
        ])
    })
    it('should be 5 degree matrix printing `15` when given degree = 5 & pattern = pyramidMatrix', () => {
        const pyramidTriangle = new SquareMatrix(15, new PyramidTriangle())
        expect(pyramidTriangle.executePattern(5)).toEqual([
            [' ', ' ', 15, ' ', ' '],
            [' ', 15, 15, 15, ' '],
            [15, 15, 15, 15, 15],
            [' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' '],
        ])
    })
    test('throws on odd number', () => {
        const pyramid = new PyramidTriangle()
        expect(() => pyramid.twoDimensionArrayLogic(4, '*')).toThrow()
    })
    it('should be 6 degree matrix printing `$` when given degree = 6 & pattern = leftDownwardRightTriangle', () => {
        const leftDownwardRightTriangle = new SquareMatrix('$', new LeftDownwardRightTriangle())
        expect(leftDownwardRightTriangle.executePattern(6)).toEqual([
            ['$', '$', '$', '$', '$', '$'],
            ['$', '$', '$', '$', '$', ' '],
            ['$', '$', '$', '$', ' ', ' '],
            ['$', '$', '$', ' ', ' ', ' '],
            ['$', '$', ' ', ' ', ' ', ' '],
            ['$', ' ', ' ', ' ', ' ', ' '],
        ])
    })
    it('should be 6 degree matrix printing `*` when given degree = 6 & pattern is rightDownwardRightTriangle', () => {
        const rightDownwardRightTriangle = new SquareMatrix('*', new RightDownwardRightTriangle())
        expect(rightDownwardRightTriangle.executePattern(6)).toEqual([
            ['*', '*', '*', '*', '*', '*'],
            [' ', '*', '*', '*', '*', '*'],
            [' ', ' ', '*', '*', '*', '*'],
            [' ', ' ', ' ', '*', '*', '*'],
            [' ', ' ', ' ', ' ', '*', '*'],
            [' ', ' ', ' ', ' ', ' ', '*'],
        ])
    })
})
