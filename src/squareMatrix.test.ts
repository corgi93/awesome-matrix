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
describe('cli test', () => {
    it('should be 3 degree pyramid matrix printing & when entered matrix -pyramid on cli ', () => {
        const leftUpwardRightTriangle = new SquareMatrix('()', new LeftUpwardRightTriangle())
        expect(leftUpwardRightTriangle.executePattern(6).join('\n')).toEqual(
            '(), , , , , ' +
                '\n' +
                '(),(), , , , ' +
                '\n' +
                '(),(),(), , , ' +
                '\n' +
                '(),(),(),(), , ' +
                '\n' +
                '(),(),(),(),(), ' +
                '\n' +
                '(),(),(),(),(),()',
        )
    })
    it('should be 5 degree pyramid matrix printing K9 when entered matrix -pyramid on cli ', () => {
        const rightUpwardRightTriangle = new SquareMatrix('K9', new RightUpwardRightTriangle())
        expect(rightUpwardRightTriangle.executePattern(5).join('\n')).toEqual(
            ' , , , ,K9' +
                '\n' +
                ' , , ,K9,K9' +
                '\n' +
                ' , ,K9,K9,K9' +
                '\n' +
                ' ,K9,K9,K9,K9' +
                '\n' +
                'K9,K9,K9,K9,K9',
        )
    })
    it('should be 5 degree pyramid matrix printing @ when entered matrix -p=pyramid on cli ', () => {
        const pyramid = new SquareMatrix('@', new PyramidTriangle())
        expect(
            pyramid
                .executePattern(3)
                .join('\n')
                .replace(/,+/g, ''),
        ).toEqual(' @ ' + '\n' + '@@@' + '\n' + '   ')
    })
    it('should be 5 degree pyramid matrix printing & when entered matrix -p=leftDownward on cli ', () => {
        const pyramid = new SquareMatrix('&', new LeftDownwardRightTriangle())
        expect(
            pyramid
                .executePattern(4)
                .join('\n')
                .replace(/,+/g, ''),
        ).toEqual('&&&&' + '\n' + '&&& ' + '\n' + '&&  ' + '\n' + '&   ')
    })
    it('should be 5 degree pyramid matrix printing 5 when entered matrix -p=rightDownward on cli ', () => {
        const pyramid = new SquareMatrix('5', new RightDownwardRightTriangle())
        expect(
            pyramid
                .executePattern(5)
                .join('\n')
                .replace(/,+/g, ''),
        ).toEqual('55555' + '\n' + ' 5555' + '\n' + '  555' + '\n' + '   55' + '\n' + '    5')
    })
    it('should be 5 degree pyramid matrix printing # when entered matrix -p=leftUpward on cli ', () => {
        const pyramid = new SquareMatrix('#', new LeftUpwardRightTriangle())
        expect(
            pyramid
                .executePattern(6)
                .join('\n')
                .replace(/,+/g, ''),
        ).toEqual('#     ' + '\n' + '##    ' + '\n' + '###   ' + '\n' + '####  ' + '\n' + '##### ' + '\n' + '######')
    })
    it('should be 5 degree pyramid matrix printing T when entered matrix -p=leftUpward on cli ', () => {
        const pyramid = new SquareMatrix('T', new RightUpwardRightTriangle())
        expect(
            pyramid
                .executePattern(4)
                .join('\n')
                .replace(/,+/g, ''),
        ).toEqual('   T' + '\n' + '  TT' + '\n' + ' TTT' + '\n' + 'TTTT')
    })
})
