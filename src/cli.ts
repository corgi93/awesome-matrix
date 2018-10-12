#!/usr/bin/env node
'use strict'

const argv = process.argv
// argv[1] = '[-help: see helps]'
// argv[2] = '[-test: test]'
// argv[3] = '[-lint: ts-lint]'

function usage(): void {
    console.log('Usage: TSAwesomeMatrix')
    console.log('Command line arguments: ')
    console.log(' [-help   -h : see guidelines] ')
    console.log(' [-start  -s : start ts-node]')
    console.log(' [-build  -b : build typescript to javascript] ')
    console.log(' [-test   -t: test with jest] ')
    console.log(' [-lint   -l: lint with ts-lint] ')
    process.exit()
}

function cliStartMatrix(): void {
    console.log('start typescript')
    console.log('try: npm start')
    process.exit()
}

function cliBuildMatrix(): void {
    console.log('build typescript')
    console.log('try: npm run build')
    process.exit()
}

function cliTestMatrix(): void {
    console.log('unit test with jest')
    console.log('try: npm test')
    process.exit()
}

function cliLintMatrix(): void {
    console.log('lint all ts file')
    console.log('try: yarn lint')
    process.exit()
}

if (argv.lastIndexOf('-help') !== -1 || argv.lastIndexOf('-h') !== -1) {
    usage()
} else if (argv.lastIndexOf('-start') !== -1 || argv.lastIndexOf('-s') !== -1) {
    cliStartMatrix()
} else if (argv.lastIndexOf('-build') !== -1 || argv.lastIndexOf('-b') !== -1) {
    cliBuildMatrix()
} else if (argv.lastIndexOf('-test') !== -1 || argv.lastIndexOf('-t') !== -1) {
    cliTestMatrix()
} else if (argv.lastIndexOf('-lint') !== -1 || argv.lastIndexOf('-l') !== -1) {
    cliLintMatrix()
} else {
    console.log('Enter -help')
}
