import { Argument, optionPattern, prettier } from './cli'

describe('getValue(search , splitChar) function', () => {
    it('should be [] when given search : -p=pyramid and split : = ', () => {
        const testArray: string[] = ['a', 'b', 'c']
        const val = new Argument(testArray)
        expect(val.getValue('-p=pyramid', '=')).toEqual([])
    })
})

describe('isContained(keyword) function', () => {
    it('should be true when argv contain keyword in this params ', () => {
        const testArray: string[] = ['this', 'is', 'test']
        const word = new Argument(testArray)
        expect(word.isContained('this')).toEqual(true)
    })
})

describe('prettier(arr) function', () => {
    it('should be clean array when use prettier()', () => {
        const testArray: string[][] = [
            [' ', ' ', ' ', 'T'],
            [' ', ' ', 'T', 'T'],
            [' ', 'T', 'T', 'T'],
            ['T', 'T', 'T', 'T'],
        ]
        expect(prettier(testArray)).toEqual(
            '   T' + '\n' + '  TT' + '\n' + ' TTT' + '\n' + 'TTTT',
        )
    })
})

describe('isContainPartial(keyword) function', () => {
    it('should be true when contain partial string', () => {
        const testArray: string[] = ['-s=$', 'test', 'array']
        const word = new Argument(testArray)
        expect(word.isContainPartial('-s=')).toEqual(true)
    })
})

describe('isEmpty() function', () => {
    it('should be true when arguments is empty', () => {
        const testArray: string[] = ['node', 'matrix']
        const word = new Argument(testArray)
        expect(word.isEmpty()).toEqual(true)
    })
})

describe('extractOption(keyword) function', () => {
    it('should be Extract option when entered keyword', () => {
        const testArray: string[] = ['-s=#']
        const word = new Argument(testArray)
        expect(word.extractOption('-s=')).toEqual('-s=')
    })
})

describe('isOneKeyword() function', () => {
    it('should be true when contains only one value in the array', () => {
        const testArray: string[] = ['node', 'matrix', '-k=#']
        const word = new Argument(testArray)
        expect(word.isOneKeyword()).toEqual(true)
    })
})

describe('isTwoKeyword() function', () => {
    it('should be true when contains only two values in the array', () => {
        const testArray: string[] = ['node', 'matrix', '-k=#', '-e=3']
        const word = new Argument(testArray)
        expect(word.isTwoKeyword()).toEqual(true)
    })
})

describe('isMaxKeyword() function', () => {
    it('should be true when contains only one value in the array', () => {
        const testArray: string[] = ['node', 'matrix', '-k=#', '-e=3', '-d=7']
        const word = new Argument(testArray)
        expect(word.isMaxKeyword()).toEqual(true)
    })
})

describe('optionPattern(arg) function', () => {
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
        expect(optionPattern(test)).toEqual([
            [' ', '*', ' '],
            ['*', '*', '*'],
            [' ', ' ', ' '],
        ])
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
    it('should be print error message when input value is `-s=`', () => {
        const argv = ['matrix', '-s=']
        const test = new Argument(argv)
        expect(optionPattern(test)).toEqual('please fill the shape value')
    })
    it('should be print error message when input value is `-s` ', () => {
        const argv = ['matrix', '-s']
        const test = new Argument(argv)
        expect(optionPattern(test)).toEqual('check the shape')
    })
    it('should be print error message when input value is `-d=` ', () => {
        const argv = ['matrix', '-d=']
        const test = new Argument(argv)
        expect(optionPattern(test)).toEqual('please fill the degree value')
    })
    it('should be print error message when degree value is not number', () => {
        const argv = ['matrix', '-d=@']
        const test = new Argument(argv)
        expect(optionPattern(test)).toEqual('degree must be a number')
    })
    it('should be print error message when input value is `-p` ', () => {
        const argv = ['matrix', '-p']
        const test = new Argument(argv)
        expect(optionPattern(test)).toEqual('check the pattern')
    })
    it('should be print error message when input value is `-p=` ', () => {
        const argv = ['matrix', '-p=']
        const test = new Argument(argv)
        expect(optionPattern(test)).toEqual('please check the pattern value')
    })
})
