#!/usr/bin/env node
import { LeftDownwardRightTriangle } from './patterns/leftDownwardRightTriangle'
import { LeftUpwardRightTriangle } from './patterns/leftUpwardRightTriangle'
import { PyramidTriangle } from './patterns/pyramidTriangle'
import { RightDownwardRightTriangle } from './patterns/rightDownwardRightTriangle'
import { RightUpwardRightTriangle } from './patterns/rightUpwardRightTriangle'
import { SquareMatrix } from './squareMatrix'

const argv = process.argv

export function usage(): void {
    console.log('TSAwesomeMatrix CLI')
    console.log('Usage: matrix [Option] shapeCharacter degree')
    console.log('Option :')
    console.log('  -help | -h :  Display this help message')
    console.log(
        '  -pattern  : -pattern is one of (-pyramid | -leftUpward | -rightUpward | -leftDownward | -rightDownward)' +
            ' [default : -pyramid]',
    )
}

function isContainKeyword(thisArgv: string[], keyword: string): boolean {
    return thisArgv.lastIndexOf(keyword) !== -1
}

class PatternsCLI {
    public patternsExection() {
        const shapeCharacter = argv[3]
        const degree = argv[4]
        const parsingValue = parseInt(degree, 10)

        if (exceptionKeywordPatterns()) {
            console.error('Error: You entered Keyword in place shapeCharacter. please enter other character')
            process.exit(-1)
        } else if (isNaN(parseInt(degree, 10))) {
            console.error('Error: Enter to number in place degree')
        } else {
            if (isContainKeyword(argv, '-pyramid')) {
                const pyramid = new SquareMatrix(shapeCharacter, new PyramidTriangle())
                console.log(pyramid.executePattern(parsingValue).join('\n'))
            } else if (isContainKeyword(argv, '-rightUpward')) {
                const rightUpward = new SquareMatrix(shapeCharacter, new RightUpwardRightTriangle())
                console.log(rightUpward.executePattern(parsingValue).join('\n'))
            } else if (isContainKeyword(argv, '-leftUpward')) {
                const leftUpward = new SquareMatrix(shapeCharacter, new LeftUpwardRightTriangle())
                console.log(leftUpward.executePattern(parsingValue).join('\n'))
            } else if (isContainKeyword(argv, '-rightDownward')) {
                const rightDownward = new SquareMatrix(shapeCharacter, new RightDownwardRightTriangle())
                console.log(rightDownward.executePattern(parsingValue).join('\n'))
            } else if (isContainKeyword(argv, '-leftDownward')) {
                const leftDownward = new SquareMatrix(shapeCharacter, new LeftDownwardRightTriangle())
                console.log(leftDownward.executePattern(parsingValue).join('\n'))
            }
        }
    }
}

function exceptionKeywordDefault() {
    const shapeCharacter = argv[2]

    return (
        shapeCharacter === '-h' ||
        shapeCharacter === '-help' ||
        shapeCharacter === '-pyramid' ||
        shapeCharacter === '-rightUpward' ||
        shapeCharacter === '-leftUpward' ||
        shapeCharacter === '-rightDownward' ||
        shapeCharacter === '-leftDownward'
    )
}

function exceptionKeywordPatterns() {
    const shapeCharacter = argv[3]

    return (
        shapeCharacter === '-h' ||
        shapeCharacter === '-help' ||
        shapeCharacter === '-pyramid' ||
        shapeCharacter === '-rightUpward' ||
        shapeCharacter === '-leftUpward' ||
        shapeCharacter === '-rightDownward' ||
        shapeCharacter === '-leftDownward'
    )
}

function defaultPattern() {
    const shapeCharacter = argv[2]
    const degree = argv[3]
    const parsingValue = parseInt(degree, 10)

    if (exceptionKeywordDefault()) {
        console.error('Error: You entered Keyword in place shapeCharacter. please enter other character')
        process.exit(-1)
    } else if (isNaN(parsingValue)) {
        console.error('Error: Enter to number in place degree')
    } else {
        const pyramidTriangle = new SquareMatrix(shapeCharacter, new PyramidTriangle())
        console.log(pyramidTriangle.executePattern(parsingValue).join('\n'))
        console.log(argv)
        process.exit(0)
    }
}

function cliProcess() {
    if (argv.length === 2) {
        usage()
    } else if (argv.length === 3 && (isContainKeyword(argv, '-help') || isContainKeyword(argv, '-h'))) {
        usage()
    } else if (argv.length === 4) {
        defaultPattern()
    } else if (argv.length === 5) {
        const patternsCLI = new PatternsCLI()
        patternsCLI.patternsExection()
    } else {
        console.error('Enter shapeCharacter and degree in order and put in proper type. Please check the usage')
        process.exit(-1)
    }
}
cliProcess()
