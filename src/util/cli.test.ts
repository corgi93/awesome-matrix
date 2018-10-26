import { RightUpwardRightTriangle } from '../patterns/rightUpwardRightTriangle'
import { SquareMatrix } from '../squareMatrix'
import { Argument, prettier } from './cli'

describe('cli test', () => {
    it('should be [] when given search : -p=pyramid and split : = ', () => {
        const testArray: string[] = ['a', 'b', 'c']
        const val = new Argument(testArray)
        expect(val.getValue('-p=pyramid', '=')).toEqual([])
    })
    it('should be true when argv contain keyword in this params ', () => {
        const testArray: string[] = ['this', 'is', 'test']
        const word = new Argument(testArray)
        expect(word.isContained('this')).toEqual(true)
    })
    it('should be clean array when use prettier()', () => {
        const matrix = new SquareMatrix('T', new RightUpwardRightTriangle())
        expect(prettier(matrix.executePattern(4))).toEqual('   T' + '\n' + '  TT' + '\n' + ' TTT' + '\n' + 'TTTT')
    })
    it('should be true when contain partial string', () => {
        const testArray: string[] = ['-s=$', 'test', 'array']
        const word = new Argument(testArray)
        expect(word.isContainPartial('-s=')).toEqual(true)
    })
})
