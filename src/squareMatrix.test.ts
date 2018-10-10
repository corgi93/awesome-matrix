import {
    LeftDownwardRightTriangle,
    LeftUpwardRightTriangle,
    PyramidTriangle,
    RightDownwardRightTriangle,
    RightUpwardRightTriangle,
} from './squareMatrix'

describe('squareMatrix test', () => {
    it('should be 7 degree matrix printing `%` when given degree = 7 & pattern is leftUpwardRightTriangle ', () => {
        const leftUpwardRightTriangle = new LeftUpwardRightTriangle('%')
        expect(leftUpwardRightTriangle.twoDimensionArrayLogic(7)).toEqual([
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
        const rightUpwardRightTriangle = new RightUpwardRightTriangle('@')
        expect(rightUpwardRightTriangle.twoDimensionArrayLogic(4)).toEqual([
            [' ', ' ', ' ', '@'],
            [' ', ' ', '@', '@'],
            [' ', '@', '@', '@'],
            ['@', '@', '@', '@'],
        ])
    })
    it('should be 5 degree matrix printing `K` when given degree = 5 & pattern is pyramidMatrix', () => {
        const pyramidTriangle = new PyramidTriangle('K')
        expect(pyramidTriangle.twoDimensionArrayLogic(5)).toEqual([
            [' ', ' ', 'K', ' ', ' '],
            [' ', 'K', 'K', 'K', ' '],
            ['K', 'K', 'K', 'K', 'K'],
            [' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' '],
        ])
    })
    it('should be 6 degree matrix printing `$` when given degree = 6 & pattern is leftDownwardRightTriangle', () => {
        const leftDownwardRightTriangle = new LeftDownwardRightTriangle('$')
        expect(leftDownwardRightTriangle.twoDimensionArrayLogic(6)).toEqual([
            ['$', '$', '$', '$', '$', '$'],
            ['$', '$', '$', '$', '$', ' '],
            ['$', '$', '$', '$', ' ', ' '],
            ['$', '$', '$', ' ', ' ', ' '],
            ['$', '$', ' ', ' ', ' ', ' '],
            ['$', ' ', ' ', ' ', ' ', ' '],
        ])
    })
    it('should be 6 degree matrix printing `*` when given degree = 6 & pattern is rightDownwardRightTriangle', () => {
        const rightDownwardRightTriangle = new RightDownwardRightTriangle('*')
        expect(rightDownwardRightTriangle.twoDimensionArrayLogic(6)).toEqual([
            ['*', '*', '*', '*', '*', '*'],
            [' ', '*', '*', '*', '*', '*'],
            [' ', ' ', '*', '*', '*', '*'],
            [' ', ' ', ' ', '*', '*', '*'],
            [' ', ' ', ' ', ' ', '*', '*'],
            [' ', ' ', ' ', ' ', ' ', '*'],
        ])
    })
})
