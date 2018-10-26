import { Argument, optionPattern, prettier } from './cli'

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
        const testArray: string[][] = [
            [' ', ' ', ' ', 'T'],
            [' ', ' ', 'T', 'T'],
            [' ', 'T', 'T', 'T'],
            ['T', 'T', 'T', 'T'],
        ]
        expect(prettier(testArray)).toEqual('   T' + '\n' + '  TT' + '\n' + ' TTT' + '\n' + 'TTTT')
    })
    it('should be true when contain partial string', () => {
        const testArray: string[] = ['-s=$', 'test', 'array']
        const word = new Argument(testArray)
        expect(word.isContainPartial('-s=')).toEqual(true)
    })
    it('should be true when arguments is empty', () => {
        const testArray: string[] = ['node', '../matrix']
        const word = new Argument(testArray)
        expect(word.isEmpty()).toEqual(true)
    })
    it('should be true when contain matrix', () => {
        const testArray: string[] = ['node', '../matrix', '-p=pyramid']
        const word = new Argument(testArray)
        expect(word.isNotEmpty()).toEqual(true)
    })
    it('should be matrix satisfying the conditions when -p=leftUpward -s=# -d=5', () => {
        process.argv = ['-s=#', '-p=leftUpward', '-d=5']
        expect(prettier(optionPattern())).toEqual(
            '#    ' + '\n' + '##   ' + '\n' + '###  ' + '\n' + '#### ' + '\n' + '#####',
        )
    })
    it('should be matrix satisfying the conditions when -d=3 and others are default', () => {
        process.argv = ['-d=3']
        expect(prettier(optionPattern())).toEqual(' * ' + '\n' + '***' + '\n' + '   ')
    })
    it('should be matrix satisfying the conditions when -p=rightDownward -s=@ and degree is default', () => {
        process.argv = ['-s=@', '-p=leftDownward']
        expect(prettier(optionPattern())).toEqual(
            '@@@@@' + '\n' + '@@@@ ' + '\n' + '@@@  ' + '\n' + '@@   ' + '\n' + '@    ',
        )
    })
})
