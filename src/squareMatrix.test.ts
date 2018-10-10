import { LeftDownwardRightTriangle } from './LeftDownwardRightTriangle'
import { LeftUpwardRightTriangle } from './LeftUpwardRightTriangle'
import { PyramidTriangle } from './PyramidTriangle'
import { RightDownwardRightTriangle } from './RightDownwardRightTriangle'
import { RightUpwardRightTriangle } from './RightUpwardRightTriangle'
import { Matrix } from './squareMatrix'

describe('squareMatrix test', () => {
    it('should be 7 degree matrix printing `%` when given degree = 7 & pattern is leftUpwardRightTriangle ', () => {
        const matrix1 = new Matrix('$', new LeftUpwardRightTriangle())
        expect(matrix1.executePattern(7)).toEqual([
            ['%', ' ', ' ', ' ', ' ', ' ', ' '],
            ['%', '%', ' ', ' ', ' ', ' ', ' '],
            ['%', '%', '%', ' ', ' ', ' ', ' '],
            ['%', '%', '%', '%', ' ', ' ', ' '],
            ['%', '%', '%', '%', '%', ' ', ' '],
            ['%', '%', '%', '%', '%', '%', ' '],
            ['%', '%', '%', '%', '%', '%', '%'],
        ])
    })
    it('should be 4 degree matrix printing `@` when given degree = 4 & pattern is rightUpwardRightTriangle', () => {
        const matrix2 = new Matrix('%', new RightUpwardRightTriangle())
        expect(matrix2.executePattern(4)).toEqual([
            [' ', ' ', ' ', '@'],
            [' ', ' ', '@', '@'],
            [' ', '@', '@', '@'],
            ['@', '@', '@', '@'],
        ])
    })
    it('should be 5 degree matrix printing `K` when given degree = 5 & pattern is pyramidMatrix', () => {
        const matrix3 = new Matrix('+', new PyramidTriangle())
        expect(matrix3.executePattern(5)).toEqual([
            [' ', ' ', 'K', ' ', ' '],
            [' ', 'K', 'K', 'K', ' '],
            ['K', 'K', 'K', 'K', 'K'],
            [' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' '],
        ])
    })
    it('should be 6 degree matrix printing `$` when given degree = 6 & pattern is leftDownwardRightTriangle', () => {
        const matrix4 = new Matrix('K', new LeftDownwardRightTriangle())
        expect(matrix4.executePattern(6)).toEqual([
            ['$', '$', '$', '$', '$', '$'],
            ['$', '$', '$', '$', '$', ' '],
            ['$', '$', '$', '$', ' ', ' '],
            ['$', '$', '$', ' ', ' ', ' '],
            ['$', '$', ' ', ' ', ' ', ' '],
            ['$', ' ', ' ', ' ', ' ', ' '],
        ])
    })
    it('should be 6 degree matrix printing `*` when given degree = 6 & pattern is rightDownwardRightTriangle', () => {
        const matrix5 = new Matrix('?', new RightDownwardRightTriangle())
        expect(matrix5.executePattern(6)).toEqual([
            ['*', '*', '*', '*', '*', '*'],
            [' ', '*', '*', '*', '*', '*'],
            [' ', ' ', '*', '*', '*', '*'],
            [' ', ' ', ' ', '*', '*', '*'],
            [' ', ' ', ' ', ' ', '*', '*'],
            [' ', ' ', ' ', ' ', ' ', '*'],
        ])
    })
})
