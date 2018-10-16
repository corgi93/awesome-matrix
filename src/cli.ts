#!/usr/bin/env node
import { LeftDownwardRightTriangle } from './patterns/leftDownwardRightTriangle'
import { LeftUpwardRightTriangle } from './patterns/leftUpwardRightTriangle'
import { PyramidTriangle } from './patterns/pyramidTriangle'
import { RightDownwardRightTriangle } from './patterns/rightDownwardRightTriangle'
import { RightUpwardRightTriangle } from './patterns/rightUpwardRightTriangle'
import { SquareMatrix } from './squareMatrix'

const argv = process.argv

export function usage(): void {
    console.log(' Usage: TSAwesomeMatrix ')
    console.log(' Command line arguments: ')
    console.log(' [-help | -h : this guidelines] ')
    console.log(' [-pyramid : print pyramid pattern]')
    console.log(' [-leftUpward : print leftUpwardRightTriangle pattern]')
    console.log(' [-rightUpward : print rightUpwardRightTriangle pattern]')
    console.log(' [-leftDownward : print leftDownwardRightTriangle pattern]')
    console.log(' [-rightDownward : print rightDownwardRightTriangle pattern]')
    process.exit()
}

const leftUpwardRightTriangle = new SquareMatrix('&', new LeftUpwardRightTriangle())
const rightUpwardRightTriangle = new SquareMatrix('8', new RightUpwardRightTriangle())
const pyramidTriangle = new SquareMatrix(8, new PyramidTriangle())
const leftDownwardRightTriangle = new SquareMatrix('K9', new LeftDownwardRightTriangle())
const rightDownwardRightTriangle = new SquareMatrix('=', new RightDownwardRightTriangle())

if (argv.length === 3) {
    if (argv.lastIndexOf('-help') !== -1) {
        usage()
    } else if (argv.lastIndexOf('-pyramid') !== -1) {
        argv[3] = 'this is pyramid matrix using two-dimensional array'
        console.log(pyramidTriangle.executePattern(5).join('\n'))
    } else if (argv.lastIndexOf('-leftUpward') !== -1) {
        argv[3] = 'this is leftUpward-RightTriangle matrix using two-dimensional array'
        console.log(leftUpwardRightTriangle.executePattern(7).join('\n'))
    } else if (argv.lastIndexOf('-rightUpward') !== -1) {
        argv[3] = 'this is rightUpward-RightTriangle matrix using two-dimensional array'
        console.log(rightUpwardRightTriangle.executePattern(4).join('\n'))
    } else if (argv.lastIndexOf('-leftDownward') !== -1) {
        argv[3] = 'this is leftDownward-RightTriangle matrix using two-dimensional array'
        console.log(leftDownwardRightTriangle.executePattern(9).join('\n'))
    } else if (argv.lastIndexOf('-rightDownward') !== -1) {
        argv[3] = 'this is rightDownward-RightTriangle matrix using two-dimensional array'
        console.log(rightDownwardRightTriangle.executePattern(6).join('\n'))
    } else {
        console.log('if you want to see the guidelines. please enter matrix -help')
    }
} else {
    throw new Error('please enter one keyword')
}
