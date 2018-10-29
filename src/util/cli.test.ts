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
    it('should be matrix satisfying the conditions when default conditions', () => {
        const test = new Argument(process.argv)
        expect(optionPattern(test)).toEqual([
            [' ', ' ', '*', ' ', ' '],
            [' ', '*', '*', '*', ' '],
            ['*', '*', '*', '*', '*'],
            [' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' '],
        ])
    })
    it('should be matrix satisfying the conditions when -d=3 and others are default', () => {
        const argv = ['matrix', '-d=3']
        const test = new Argument(argv)
        test.isContained('-d=3')
        expect(optionPattern(test)).toEqual([[' ', '*', ' '], ['*', '*', '*'], [' ', ' ', ' ']])
    })
    it('should be matrix satisfying the conditions when -p=rightDownward -s=@ and -d=4', () => {
        const argv = ['matrix', '-d=4', '-s=@', '-p=leftDownward']
        const test = new Argument(argv)
        expect(optionPattern(test)).toEqual([
            ['@', '@', '@', '@'],
            ['@', '@', '@', ' '],
            ['@', '@', ' ', ' '],
            ['@', ' ', ' ', ' '],
        ])
    })
    it('should be error message when input value is `-s=`', () => {
        const argv = ['matrix', '-s=']
        const test = new Argument(argv)
        expect(optionPattern(test)).toEqual('please fill the shape value')
    })
    it('should be error message when input value is `-s` ', () => {
        const argv = ['matrix', '-s']
        const test = new Argument(argv)
        expect(optionPattern(test)).toEqual('check the shape')
    })
    it('should be error message when input value is `-d=` ', () => {
        const argv = ['matrix', '-d=']
        const test = new Argument(argv)
        expect(optionPattern(test)).toEqual('please fill the degree value')
    })
    it('should be error message when degree value is not number', () => {
        const argv = ['matrix', '-d=@']
        const test = new Argument(argv)
        expect(optionPattern(test)).toEqual('degree must be a number')
    })

    it('should be error message when input value is `-p` ', () => {
        const argv = ['matrix', '-p']
        const test = new Argument(argv)
        expect(optionPattern(test)).toEqual('please check the pattern')
    })
    it('should be error message when input value is `-p=` ', () => {
        const argv = ['matrix', '-p=']
        const test = new Argument(argv)
        expect(optionPattern(test)).toEqual('please fill the pattern value')
    })
})
