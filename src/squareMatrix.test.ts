import { LeftDownwardRightTriangle } from './LeftDownwardRightTriangle'
import { LeftUpwardRightTriangle } from './LeftUpwardRightTriangle'
import { PyramidTriangle } from './PyramidTriangle'
import { RightDownwardRightTriangle } from './RightDownwardRightTriangle'
import { RightUpwardRightTriangle } from './RightUpwardRightTriangle'
import { Matrix } from './squareMatrix'

describe('squareMatrix test', () => {
    it('should be 7 degree matrix printing `%` when given degree = 7 & pattern is leftUpwardRightTriangle ', () => {
        const leftUpwardRightTriangle = new Matrix('%', new LeftUpwardRightTriangle())
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
    it('should be 4 degree matrix printing `@` when given degree = 4 & pattern is rightUpwardRightTriangle', () => {
        const rightUpwardRightTriangle = new Matrix('@', new RightUpwardRightTriangle())
        expect(rightUpwardRightTriangle.executePattern(4)).toEqual([
            [' ', ' ', ' ', '@'],
            [' ', ' ', '@', '@'],
            [' ', '@', '@', '@'],
            ['@', '@', '@', '@'],
        ])
    })
    it('should be 5 degree matrix printing `K` when given degree = 5 & pattern is pyramidMatrix', () => {
        const pyramidTriangle = new Matrix('K', new PyramidTriangle())
        expect(pyramidTriangle.executePattern(5)).toEqual([
            [' ', ' ', 'K', ' ', ' '],
            [' ', 'K', 'K', 'K', ' '],
            ['K', 'K', 'K', 'K', 'K'],
            [' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' '],
        ])
    })
    it('should be 6 degree matrix printing `$` when given degree = 6 & pattern is leftDownwardRightTriangle', () => {
        const leftDownwardRightTriangle = new Matrix('$', new LeftDownwardRightTriangle())
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
        const rightDownwardRightTriangle = new Matrix('*', new RightDownwardRightTriangle())
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
