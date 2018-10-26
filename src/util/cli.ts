import { LeftDownwardRightTriangle } from '../patterns/leftDownwardRightTriangle'
import { LeftUpwardRightTriangle } from '../patterns/leftUpwardRightTriangle'
import { PyramidTriangle } from '../patterns/pyramidTriangle'
import { RightDownwardRightTriangle } from '../patterns/rightDownwardRightTriangle'
import { RightUpwardRightTriangle } from '../patterns/rightUpwardRightTriangle'
import { SquareMatrix } from '../squareMatrix'

function usage(): void {
    console.log('AwesomeMatrix CLI')
    console.log('Usage: matrix [Option] ')
    console.log('Option :')
    console.log('  -help , -h :  Display this help message')
    console.log(
        '  -p=pattern -s=character -d=number : pattern is one of ' +
            ' (pyramid | leftUpward | rightUpward | leftDownward | rightDownward)' +
            ' [default -p: pyramid] [default -s: *] [default degree : 5]',
    )
}

export class Argument {
    private readonly args: string[]

    constructor(argv: string[]) {
        this.args = argv
    }

    public get length() {
        return this.args.length
    }

    public isContained(keyword: string): boolean {
        return this.args.indexOf(keyword) !== -1
    }

    public getValue(search: string, splitChar: string): string[] {
        const values = []

        for (const key in this.args) {
            if (this.args[key].indexOf(search) === 0) {
                values.push(this.args[key].split(splitChar)[1])
            }
        }
        return values
    }
    public isContainPartial(keyword: string): boolean {
        const values = []
        for (const key in this.args) {
            if (this.args[key].indexOf(keyword) === 0) {
                values.push(this.args[key].slice(0, 3))
            }
        }
        return values.indexOf(keyword) !== -1
    }
}

export function optionPattern(): string[][] | string {
    const arg = new Argument(process.argv)
    let degree: number = 5
    let shape = ' '

    if (arg.isContainPartial('-s=')) {
        shape = arg.getValue('-s=', '=').toString()
    } else if (!arg.isContained('-s')) {
        shape = '*'
    }

    if (arg.isContainPartial('-d=')) {
        const strDegree = arg.getValue('-d=', '=').toString()
        degree = parseInt(strDegree, 10)
    } else if (!arg.isContained('-d')) {
        degree = 5
    }

    if (arg.isContained('-p=pyramid')) {
        const pyramid = new SquareMatrix(shape, new PyramidTriangle())
        return pyramid.executePattern(degree)
    } else if (arg.isContained('-p=rightUpward')) {
        const rightUpward = new SquareMatrix(shape, new RightUpwardRightTriangle())
        return rightUpward.executePattern(degree)
    } else if (arg.isContained('-p=leftUpward')) {
        const leftUpward = new SquareMatrix(shape, new LeftUpwardRightTriangle())
        return leftUpward.executePattern(degree)
    } else if (arg.isContained('-p=rightDownward')) {
        const rightDownward = new SquareMatrix(shape, new RightDownwardRightTriangle())
        return rightDownward.executePattern(degree)
    } else if (arg.isContained('-p=leftDownward')) {
        const leftDownward = new SquareMatrix(shape, new LeftDownwardRightTriangle())
        return leftDownward.executePattern(degree)
    } else if (!arg.isContained('-p')) {
        const pyramid = new SquareMatrix(shape, new PyramidTriangle())
        return pyramid.executePattern(degree)
    } else {
        return 'check the pattern'
    }
}

export function prettier(inputValue: string[][] | string) {
    if (typeof inputValue !== 'string') {
        return inputValue.join('\n').replace(/,+/g, '')
    } else {
        return inputValue
    }
}

function cliStart(): void {
    const arg = new Argument(process.argv)
    if (arg.length === 2) {
        const pyramid = new SquareMatrix('*', new PyramidTriangle())
        console.log(prettier(pyramid.executePattern(5)))
    } else if (arg.isContained('-help') || arg.isContained('-h')) {
        usage()
        process.exit(-1)
    } else if (arg.length > 2) {
        console.log(prettier(optionPattern()))
    } else {
        console.error('Please check the keyword!')
        process.exit(-1)
    }
}

cliStart()
