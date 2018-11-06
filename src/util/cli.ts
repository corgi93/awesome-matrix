import { LeftDownwardRightTriangle } from '../patterns/leftDownwardRightTriangle'
import { LeftUpwardRightTriangle } from '../patterns/leftUpwardRightTriangle'
import { RightDownwardRightTriangle } from '../patterns/rightDownwardRightTriangle'
import { RightUpwardRightTriangle } from '../patterns/rightUpwardRightTriangle'
import { SquareMatrix } from '../squareMatrix'

// @ts-ignore
function usage(): void {
    console.log('AwesomeMatrix CLI')
    console.log('Usage: matrix [Option]')
    console.log('Option :')
    console.log('  -help , -h :  Display this help message')
    console.log('  -p=pattern : pattern is one of (pyramid | leftUpward | rightUpward | leftDownward | rightDownward)')
    console.log('  -s=character : Users can choose the shape character (defaultValue -s=*)')
    console.log('  -d=degree : Users can set the order of array (defaultValue -d=5)')
}

export interface IOption {
    name: string
    shortcut: string
    defaultValue?: string
    validation?: (value: string) => IValidation
}

interface IValidation {
    isValid?: boolean
    errorMessage?: string
}

export const options: IOption[] = [
    { name: 'help', shortcut: '-h' },
    {
        defaultValue: 'pyramid',
        name: 'pattern',
        shortcut: 'p',
        validation: (pValue: string) => {
            const patterns = ['pyramid', 'leftUpward', 'rightUpward', 'leftDownward', 'rightDownward']
            for (const pattern of patterns) {
                if (pattern === pValue) {
                    return { isValid: true }
                }
            }
            return { errorMessage: 'check the patterns' }
        }
    },
    {
        defaultValue: '5',
        name: 'degree',
        shortcut: 'd',
        validation: (value: string) => {
            const dValue = parseInt(value, 10)

            if (isNaN(dValue)) {
                return {
                    errorMessage: 'degree must be a number',
                    isValid: false
                }
            } else if (dValue < 0 || dValue > 30) {
                return {
                    errorMessage: 'degree range is more than 0 and less than 30'
                }
            } else {
                return { isValid: true }
            }
        }
    },
    {
        defaultValue: '@',
        name: 'shape',
        shortcut: 's',
        validation: (sValue: string) => {
            if (sValue.length > 1) {
                return { errorMessage: 'shape size is one' }
            } else if (sValue === '') {
                return { errorMessage: 'fill the shape type' }
            } else {
                return { isValid: true }
            }
        }
    }
]

interface IValidCheck {
    isValid: boolean
    errorMessages: string[]
}

export class Argument {
    public readonly validationCheck: IValidCheck
    private readonly args: string[]
    private readonly options: IOption[]

    constructor(args: string[], opt: IOption[]) {
        this.args = args
        this.options = opt
        this.validationCheck = { isValid: true, errorMessages: [] }
        this.evaluation()
    }

    public getValue(shortcut: string): string {
        for (const arg of this.args) {
            const arr: string[] = arg.split('=')

            if (removeDash(arr[0]) === shortcut) {
                return arr[1]
            }
        }

        const defaultValue = this.getDefaultValue(shortcut)

        return defaultValue ? defaultValue : ''
    }

    public getDefaultValue(shortcut: string): string | undefined {
        for (const option of this.options) {
            if (!option.defaultValue) {
                continue
            }
            if (option.shortcut === shortcut) {
                return option.defaultValue
            }
        }
        return undefined
    }

    private evaluation() {
        this.optionsEval()
        this.duplicationEval()
    }

    private optionsEval() {
        for (const option of this.options) {
            const value = this.getValue(option.shortcut)

            if (!option.validation) {
                continue
            }

            const validation = option.validation(value)

            if (validation.isValid) {
                continue
            }

            this.validationCheck.isValid = false

            if (validation.errorMessage) {
                this.validationCheck.errorMessages.push(validation.errorMessage)
            }
        }
    }

    private duplicationEval() {
        const checkSet = new Set()
        for (const arg of this.args) {
            const param = getParameter(arg)

            if (!checkSet.has(param)) {
                checkSet.add(param)
                continue
            }
            this.validationCheck.isValid = false
            this.validationCheck.errorMessages.push(`Duplicated ${param} options`)
        }
    }
}

export function getParameter(arg: string): string {
    const temp = arg.split('=')
    return removeDash(temp[0])
}

export function removeDash(value: string): string {
    const sliceIdx = value.indexOf('-')
    return value.slice(sliceIdx + 1)
}

// noinspection JSUnusedGlobalSymbols
export function cliStart(): void {
    const args = new Argument(process.argv.slice(0), options)
    const degree = parseInt(args.getValue('d'), 10)
    const shape = args.getValue('s')
    const pattern = args.getValue('p')
    const validCheck = args.validationCheck

    if (!validCheck.isValid) {
        for (const errorMessage of validCheck.errorMessages) {
            console.error(errorMessage)
        }
        process.exit(-1)
    }

    if (pattern === 'pyramid') {
        const pyramid = new SquareMatrix(shape, new RightUpwardRightTriangle())
        pyramid.executePattern(degree)
    } else if (pattern === 'rightUpward') {
        const rightUpward = new SquareMatrix(shape, new RightUpwardRightTriangle())
        rightUpward.executePattern(degree)
    } else if (pattern === 'leftUpward') {
        const leftUpward = new SquareMatrix(shape, new LeftUpwardRightTriangle())
        leftUpward.executePattern(degree)
    } else if (pattern === 'rightDownward') {
        const rightDownward = new SquareMatrix(shape, new RightDownwardRightTriangle())
        rightDownward.executePattern(degree)
    } else if (pattern === 'leftDownward') {
        const leftDownward = new SquareMatrix(shape, new LeftDownwardRightTriangle())
        leftDownward.executePattern(degree)
    }
}
