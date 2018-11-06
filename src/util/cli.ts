function usage(): void {
    console.log('AwesomeMatrix CLI')
    console.log('Usage: matrix [Option]')
    console.log('Option :')
    console.log('  -help , -h :  Display this help message')
    console.log('  -p=pattern : pattern is one of (pyramid | leftUpward | rightUpward | leftDownward | rightDownward)')
    console.log('  -s=character : Users can choose the shape character (defaultValue -s=*)')
    console.log('  -d=degree : Users can set the order of array (defaultValue -d=5)')
}

interface IOption {
    name: string
    short: string
    type?: 'number' | 'string' | 'string[]'
    value?: any
    validation?: (value: any) => IValidation
}

interface IValidation {
    isValue?: boolean
    errorMessage?: string
}

// export function parsingValue(options: IOption[]) {
//     for (let opt in options) {
//         const valType = typeof options[opt].type
//
//         if (valType === 'string' && options[opt].type === typeof 'string') {
//
//         } else if (valType === 'number' && options[opt].type === typeof 'number') {
//
//         } else {
//             return options[opt].value
//         }
//     }
// }

export const options: IOption[] = [
    { name: 'help', short: '-h', value: usage() },
    {
        name: 'pattern',
        short: '-p=',
        type: 'string[]',
        value: 'pyramid' || 'rightUpward' || 'leftUpward' || 'rightDownward' || 'leftDownward'
    },
    {
        name: 'degree',
        short: '-d=',
        type: 'number',
        validation: (dValue: number) => {
            if (isNaN(dValue)) {
                return {
                    errorMessage: 'degree must be a number',
                    isValue: false
                }
            } else if (dValue < 0 || dValue > 30) {
                return {
                    errorMessage: 'degree range is more than 0 and less than 30'
                }
            } else {
                return { isValue: true }
            }
        },
        value: 5
    },
    {
        name: 'shape',
        short: '-s=',
        type: 'string',
        validation: (sValue: string) => {
            if (sValue.length > 1) {
                return { errorMessage: 'shape size is one' }
            } else if (sValue === '') {
                return { errorMessage: 'fill the shape type' }
            } else {
                return { isValue: true }
            }
        },
        value: '@'
    }
]

export class Argument {
    public readonly args: string[]
    public readonly options: IOption[]

    constructor(args: string[], opt: IOption[]) {
        this.args = args
        this.options = opt
    }
}

// noinspection JSUnusedGlobalSymbols
function cliStart(): void {
    const args = new Argument(process.argv.slice(0), options)
    console.log(args)
}
cliStart()
