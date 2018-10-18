#!/usr/bin/env node
import { LeftDownwardRightTriangle } from './patterns/leftDownwardRightTriangle'
import { LeftUpwardRightTriangle } from './patterns/leftUpwardRightTriangle'
import { PyramidTriangle } from './patterns/pyramidTriangle'
import { RightDownwardRightTriangle } from './patterns/rightDownwardRightTriangle'
import { RightUpwardRightTriangle } from './patterns/rightUpwardRightTriangle'
import { SquareMatrix } from './squareMatrix'

const argv = process.argv
const stdin = process.stdin
const stdout = process.stdout

export function usage(): void {
    console.log(' Usage: TSAwesomeMatrix CLI')
    console.log = (writeData: string) => {
        stdout.write(writeData + ' | ')
    }
    console.log(' [-help : this guidelines] ')
    console.log(' [-pyramid : print pyramid pattern] ')
    console.log(' [-leftUpward : print leftUpwardRightTriangle pattern] ')
    console.log(' [-rightUpward : print rightUpwardRightTriangle pattern] ')
    console.log(' [-leftDownward : print leftDownwardRightTriangle pattern] ')
    console.log(' [-rightDownward : print rightDownwardRightTriangle pattern] ')
}

function isContain(thisArgv: string[], keyword: string): boolean {
    return thisArgv.lastIndexOf(keyword) !== -1
}

function inputPyramid() {
    stdin.resume()
    stdin.setEncoding('utf8')

    const inputData = ['Enter Character: ', 'Enter Degree: ']
    function askData(i: number) {
        stdout.write(`${inputData[i]}\n`)
    }
    stdin.on('data', data => {
        argv.push(data.replace('\r\n', ''))
        if (argv.length < 6) {
            askData(argv.length - 4)
        } else {
            process.exit()
        }
        const pyramidTriangle = new SquareMatrix(argv[3], new PyramidTriangle())
        console.log(pyramidTriangle.executePattern(parseInt(argv[4], 10)).join('\n'))
    })
    process.on('exit', () => {
        stdout.write(`Character: ${argv[3]} , Degree: ${argv[4]}`)
    })
    askData(0)
}

function inputLeftUpward() {
    stdin.resume()
    stdin.setEncoding('utf8')

    const inputData = ['Enter Character: ', 'Enter Degree: ']
    function askData(i: number) {
        stdout.write(`${inputData[i]}\n`)
    }
    stdin.on('data', data => {
        argv.push(data.replace('\r\n', ''))
        if (argv.length < 6) {
            askData(argv.length - 4)
        } else {
            process.exit()
        }
        const pyramidTriangle = new SquareMatrix(argv[3], new LeftUpwardRightTriangle())
        console.log(pyramidTriangle.executePattern(parseInt(argv[4], 10)).join('\n'))
    })
    process.on('exit', () => {
        stdout.write(`Character: ${argv[3]} , Degree: ${argv[4]}`)
    })
    askData(0)
}

function inputRightUpward() {
    stdin.resume()
    stdin.setEncoding('utf8')

    const inputData = ['Enter Character: ', 'Enter Degree: ']
    function askData(i: number) {
        stdout.write(`${inputData[i]}\n`)
    }
    stdin.on('data', data => {
        argv.push(data.replace('\r\n', ''))
        if (argv.length < 6) {
            askData(argv.length - 4)
        } else {
            process.exit()
        }
        const pyramidTriangle = new SquareMatrix(argv[3], new RightUpwardRightTriangle())
        console.log(pyramidTriangle.executePattern(parseInt(argv[4], 10)).join('\n'))
    })
    process.on('exit', () => {
        stdout.write(`Character: ${argv[3]} , Degree: ${argv[4]}`)
    })
    askData(0)
}

function inputLeftDownward() {
    stdin.resume()
    stdin.setEncoding('utf8')

    const inputData = ['Enter Character: ', 'Enter Degree: ']
    function askData(i: number) {
        stdout.write(`${inputData[i]}\n`)
    }
    stdin.on('data', data => {
        argv.push(data.replace('\r\n', ''))
        if (argv.length < 6) {
            askData(argv.length - 4)
        } else {
            process.exit()
        }
        const pyramidTriangle = new SquareMatrix(argv[3], new LeftDownwardRightTriangle())
        console.log(pyramidTriangle.executePattern(parseInt(argv[4], 10)).join('\n'))
    })
    process.on('exit', () => {
        stdout.write(`Character: ${argv[3]} , Degree: ${argv[4]}`)
    })
    askData(0)
}

function inputRightDownward() {
    stdin.resume()
    stdin.setEncoding('utf8')

    const inputData = ['Enter Character: ', 'Enter Degree: ']
    function askData(i: number) {
        stdout.write(`${inputData[i]}\n`)
    }
    stdin.on('data', data => {
        argv.push(data.replace('\r\n', ''))
        if (argv.length < 6) {
            askData(argv.length - 4)
        } else {
            process.exit()
        }
        const pyramidTriangle = new SquareMatrix(argv[3], new RightDownwardRightTriangle())
        console.log(pyramidTriangle.executePattern(parseInt(argv[4], 10)).join('\n'))
    })
    process.on('exit', () => {
        stdout.write(`Character: ${argv[3]} , Degree: ${argv[4]}`)
    })
    askData(0)
}

if (argv.length === 3) {
    if (isContain(argv, '-help')) {
        usage()
    } else if (isContain(argv, '-pyramid')) {
        inputPyramid()
    } else if (isContain(argv, '-leftUpward')) {
        inputLeftUpward()
    } else if (isContain(argv, '-rightUpward')) {
        inputRightUpward()
    } else if (isContain(argv, '-leftDownward')) {
        inputLeftDownward()
    } else if (isContain(argv, '-rightDownward')) {
        inputRightDownward()
    } else {
        console.log('if you want to see the guidelines. please enter matrix -help')
    }
} else {
    console.error('please enter only one keyword')
}
