import { LeftDownwardRightTriangle } from './patterns/leftDownwardRightTriangle'
import { LeftUpwardRightTriangle } from './patterns/leftUpwardRightTriangle'
import { PyramidTriangle } from './patterns/pyramidTriangle'
import { RightDownwardRightTriangle } from './patterns/rightDownwardRightTriangle'
import { RightUpwardRightTriangle } from './patterns/rightUpwardRightTriangle'
import { SquareMatrix } from './squareMatrix'

const argv = process.argv

function usage(): void {
    console.log('AwesomeMatrix CLI')
    console.log('Usage: matrix [Option] shapeCharacter degree')
    console.log('Option :')
    console.log('  -help , -h :  Display this help message')
    console.log(
        '  -p=pattern  : pattern is one of (-pyramid | -leftUpward | -rightUpward | -leftDownward | -rightDownward)' +
            ' [default : -pyramid]',
    )
    console.log('-s=input : shapeCharacter you entered')
    console.log('-d=input : Matrix Degree(only number)')
}

export class Option {
    public prettier(arr: string[][]) {
        return arr.join('\n').replace(/,+/g, '')
    }

    public patternsForm(): void {
        const shape = getValue('-s=', '=')
        const degree = getValue('-d=', '=')

        const parsingDegree = parseInt(degree.toString(), 10)
        const parsingShape = shape.toString()

        if (isNaN(parsingDegree)) {
            console.error('Please enter number in -d=degree')
        }

        if (isRightKeyword('-p=pyramid')) {
            const pyramid = new SquareMatrix(parsingShape, new PyramidTriangle())
            console.log(this.prettier(pyramid.executePattern(parsingDegree)))
        } else if (isRightKeyword('-p=rightUpward')) {
            const rightUpward = new SquareMatrix(parsingShape, new RightUpwardRightTriangle())
            console.log(this.prettier(rightUpward.executePattern(parsingDegree)))
        } else if (isRightKeyword('-p=leftUpward')) {
            const leftUpward = new SquareMatrix(parsingShape, new LeftUpwardRightTriangle())
            console.log(this.prettier(leftUpward.executePattern(parsingDegree)))
        } else if (isRightKeyword('-p=rightDownward')) {
            const rightDownward = new SquareMatrix(parsingShape, new RightDownwardRightTriangle())
            console.log(this.prettier(rightDownward.executePattern(parsingDegree)))
        } else if (isRightKeyword('-p=leftDownward')) {
            const leftDownward = new SquareMatrix(parsingShape, new LeftDownwardRightTriangle())
            console.log(this.prettier(leftDownward.executePattern(parsingDegree)))
        }
    }
}

function isRightKeyword(keyword: string): boolean {
    return argv.indexOf(keyword) !== -1
}

function getValue(search: string, splitChar: string): string[] {
    const values = []

    for (const key in argv) {
        if (argv[key].indexOf(search) === 0) {
            values.push(argv[key].split(splitChar)[1])
        }
    }
    return values
}

function callPattern() {
    if (isRightKeyword('-p=pyramid')) {
        const pattern = new Option()
        pattern.patternsForm()
    } else if (isRightKeyword('-p=leftUpward')) {
        const pattern = new Option()
        pattern.patternsForm()
    } else if (isRightKeyword('-p=rightUpward')) {
        const pattern = new Option()
        pattern.patternsForm()
    } else if (isRightKeyword('-p=leftDownward')) {
        const pattern = new Option()
        pattern.patternsForm()
    } else if (isRightKeyword('-p=rightDownward')) {
        const pattern = new Option()
        pattern.patternsForm()
    } else {
        console.error('Please check the keyword')
    }
}

function cliStart(): void {
    if (argv.length === 2) {
        usage()
        process.exit(-1)
    } else if (isRightKeyword('-help') || isRightKeyword('-h')) {
        usage()
        process.exit(-1)
    } else if (getValue('-p=', '=')) {
        callPattern()
        process.exit(-1)
    } else {
        console.error('Please check the keyword!')
        process.exit(-1)
    }
}

cliStart()
