import readline from 'readline-sync'
import { Matrix } from './squareMatrix'

const patterns = new Matrix()

const inputPattern: string = readline.question('Enter pattern(case 0 - 4): ')
const inputDegree: string = readline.question('Enter degree: ')
const inputNumberPattern = Number(inputPattern)
const inputNumberDegree = Number(inputDegree)

if (isNaN(inputNumberPattern && inputNumberDegree)) {
    console.log('patterns and degree must be a number.')
} else if (inputNumberPattern < 0 || inputNumberPattern > 4) {
    console.log('please enter a pattern number between 0 and 4')
} else {
    console.log(patterns.squareMatrix(inputNumberDegree, inputNumberPattern))
}
