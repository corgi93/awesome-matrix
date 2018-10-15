#!/usr/bin/env node
const argv = process.argv

function usage(): void {
    console.log('Usage: TSAwesomeMatrix')
    console.log('Command line arguments: ')
    console.log(' [-help | -h : this guidelines] ')
    console.log(' [-pyramid : print pyramid pattern]')
    console.log(' [-leftUpward : print leftUpwardRightTriangle pattern]')
    console.log(' [-rightUpward : print rightUpwardRightTriangle pattern]')
    console.log(' [-leftDownward : print leftDownwardRightTriangle pattern]')
    console.log(' [-rightDownward : print rightDownwardRightTriangle pattern]')
    process.exit()
}

if (argv.lastIndexOf('-help') !== -1 || argv.lastIndexOf('-h') !== -1) {
    usage()
} else if (argv.lastIndexOf('-pyramid') !== -1) {
    argv[0] = pyramid(7)
    console.log(argv[0])
} else if (argv.lastIndexOf('-leftUpward') !== -1) {
    argv[1] = leftUpwardRightTriangle(6)
    console.log(argv[1])
} else if (argv.lastIndexOf('-rightUpward') !== -1) {
    argv[2] = rightUpwardRightTriangle(5)
    console.log(argv[2])
} else if (argv.lastIndexOf('-leftDownward') !== -1) {
    argv[3] = leftDownwardRightTriangle(5)
    console.log(argv[3])
} else if (argv.lastIndexOf('-rightDownward') !== -1) {
    argv[4] = rightDownwardRightTriangle(4)
    console.log(argv[4])
} else {
    console.log('Enter -help')
}

function pyramid(totalLayer: number): string {
    let totalStar: string = ''
    for (let layer = 0; layer < totalLayer; layer++) {
        let star = ''
        for (let i = totalLayer; i > layer; i--) {
            star += ' '
        }
        for (let s = 0; s < 2 * layer + 1; s++) {
            star += '*'
        }
        for (let j = totalLayer; j > layer; j--) {
            star += ' '
        }
        totalStar += star + '\n'
    }
    return totalStar
}

function leftUpwardRightTriangle(totalLayer: number): string {
    let star: string = ''
    for (let i = 0; i < totalLayer; i++) {
        for (let j = 0; j <= i; j++) {
            star += '*'
        }
        star += '\n'
    }
    return star
}

function rightUpwardRightTriangle(totalLayer: number): string {
    let star: string = ''
    for (let i = 0; i < totalLayer; i++) {
        for (let j = 0; j < totalLayer - i; j++) {
            star += ' '
        }
        for (let j = 0; j <= i; j++) {
            star += '*'
        }
        star += '\n'
    }
    return star
}

function leftDownwardRightTriangle(totalLayer: number): string {
    let star: string = ''
    for (totalLayer; totalLayer >= 1; totalLayer--) {
        for (let j = 1; j <= totalLayer; j++) {
            star += '*'
        }
        star += '\n'
    }
    return star
}

function rightDownwardRightTriangle(totalLayer: number): string {
    let star: string = ''
    for (let t = totalLayer; t > 0; t--) {
        for (let i = 0; i < totalLayer - t; i++) {
            star += ' '
        }
        for (let i = 0; i < t; i++) {
            star += '*'
        }
        star += '\n'
    }
    return star
}
