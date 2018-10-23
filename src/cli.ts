#!/usr/bin/env node
import { LeftDownwardRightTriangle } from './patterns/leftDownwardRightTriangle'
import { LeftUpwardRightTriangle } from './patterns/leftUpwardRightTriangle'
import { PyramidTriangle } from './patterns/pyramidTriangle'
import { RightDownwardRightTriangle } from './patterns/rightDownwardRightTriangle'
import { RightUpwardRightTriangle } from './patterns/rightUpwardRightTriangle'
import { SquareMatrix } from './squareMatrix'

const argv = process.argv

export function usage(): void {
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

class Option {
    public printUsage(): void {
        if (argv.length === 2 && argv.indexOf('matrix') === 1) {
            usage()
            process.exit(-1)
        } else if (argv.indexOf('-help') || argv.indexOf('-h') === 2) {
            usage()
            process.exit(-1)
        }
    }

    public patternsForm(): void {
        const shape = getValue('-s=', '=')
        const degree = getValue('-d=', '=')

        const parsingDegree = parseInt(degree.toString(), 10)
        const parsingShape = shape.toString()

        if (isRightKeyword('-p=pyramid')) {
            const pyramid = new SquareMatrix(parsingShape, new PyramidTriangle())
            console.log(
                pyramid
                    .executePattern(parsingDegree)
                    .join('\n')
                    .replace(/,+/g, ''),
            )
        } else if (isRightKeyword('-p=rightUpward')) {
            const rightUpward = new SquareMatrix(parsingShape, new RightUpwardRightTriangle())
            console.log(
                rightUpward
                    .executePattern(parsingDegree)
                    .join('\n')
                    .replace(/,+/g, ''),
            )
        } else if (isRightKeyword('-p=leftUpward')) {
            const leftUpward = new SquareMatrix(parsingShape, new LeftUpwardRightTriangle())
            console.log(
                leftUpward
                    .executePattern(parsingDegree)
                    .join('\n')
                    .replace(/,+/g, ''),
            )
        } else if (isRightKeyword('-p=rightDownward')) {
            const rightDownward = new SquareMatrix(parsingShape, new RightDownwardRightTriangle())
            console.log(
                rightDownward
                    .executePattern(parsingDegree)
                    .join('\n')
                    .replace(/,+/g, ''),
            )
        } else if (isRightKeyword('-p=leftDownward')) {
            const leftDownward = new SquareMatrix(parsingShape, new LeftDownwardRightTriangle())
            console.log(
                leftDownward
                    .executePattern(parsingDegree)
                    .join('\n')
                    .replace(/,+/g, ''),
            )
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

function cliStart(): void {
    if (isRightKeyword('-help') || isRightKeyword('-h')) {
        const callUsage = new Option()
        callUsage.printUsage()
    } else if (isRightKeyword('-p=pyramid')) {
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
    }
}

cliStart()
