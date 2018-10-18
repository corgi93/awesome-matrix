#!/usr/bin/env node
import { LeftDownwardRightTriangle } from './patterns/leftDownwardRightTriangle'
import { LeftUpwardRightTriangle } from './patterns/leftUpwardRightTriangle'
import { PyramidTriangle } from './patterns/pyramidTriangle'
import { RightDownwardRightTriangle } from './patterns/rightDownwardRightTriangle'
import { RightUpwardRightTriangle } from './patterns/rightUpwardRightTriangle'
import { SquareMatrix } from './squareMatrix'

export function usage(): void {
    console.log('TSAwesomeMatrix CLI')
    console.log('Usage: matrix [Option] shapeCharacter degree')
    console.log('Option :')
    console.log(' -h, --help   Display this help message')
    console.log(
        ' -p, --pattern  (default value is pyramid)' +
            '(pyramid | leftUpward | rightUpward | leftDownward | rightDownward)',
    )
}

function isContain(thisArgv: string[], keyword: string): boolean {
    return thisArgv.lastIndexOf(keyword) !== -1
}

if (process.argv.length === 2) {
    usage()
} else if ((isContain(process.argv, '-help') || isContain(process.argv, '-h')) && process.argv.length === 3) {
    usage()
} else if (process.argv.length === 4) {
    const shapeCharacter = process.argv[2]
    const degree = process.argv[3]
    const pyramidTriangle = new SquareMatrix(shapeCharacter, new PyramidTriangle())
    console.log(pyramidTriangle.executePattern(parseInt(degree, 10)).join('\n'))
} else if (process.argv.length === 5) {
    const shapeCharacter = process.argv[3]
    const degree = process.argv[4]

    if (isContain(process.argv, 'pyramid')) {
        const pyramidTriangle = new SquareMatrix(shapeCharacter, new PyramidTriangle())
        console.log(pyramidTriangle.executePattern(parseInt(degree, 10)).join('\n'))
        console.log(process.argv)
    } else if (isContain(process.argv, 'leftUpward')) {
        const leftUpwardRightTriangle = new SquareMatrix(shapeCharacter, new LeftUpwardRightTriangle())
        console.log(leftUpwardRightTriangle.executePattern(parseInt(degree, 10)).join('\n'))
    } else if (isContain(process.argv, 'rightUpward')) {
        const rightUpwardRightTriangle = new SquareMatrix(shapeCharacter, new RightUpwardRightTriangle())
        console.log(rightUpwardRightTriangle.executePattern(parseInt(degree, 10)).join('\n'))
    } else if (isContain(process.argv, 'leftDownward')) {
        const leftDownwardRightTriangle = new SquareMatrix(shapeCharacter, new LeftDownwardRightTriangle())
        console.log(leftDownwardRightTriangle.executePattern(parseInt(degree, 10)).join('\n'))
    } else if (isContain(process.argv, 'rightDownward')) {
        const rightDownwardRightTriangle = new SquareMatrix(shapeCharacter, new RightDownwardRightTriangle())
        console.log(rightDownwardRightTriangle.executePattern(parseInt(degree, 10)).join('\n'))
    } else {
        console.log('The pattern you entered is missing. Please check the usage')
    }
} else {
    console.error('You should enter shapeCharacter and degree in order and put in proper type. Please check the usage')
}
