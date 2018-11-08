# awesome-matrix

This is a simple two-dimensional matrix library written by [TypeScript](https://www.typescriptlang.org/docs/home.html)
that receives input options from the user.

-   This is written in TypeScript
-   Provides basically five patterns.

### Installation

```bash
npm install awesome-matrix
```

### Usage

```typescript
import { IMatrixStrategy, RightUpwardRightTriangle, SquareMatrix } from 'awesome-matrix'

export class RightUpwardRightTriangle implements IMatrixStrategy {
    public twoDimensionArrayLogic(degree: number, stringShape: string): string[][] {
        const twoDimensionArray: string[][] = []
        // ...
        return twoDimensionArray
    }
}

const rightUp = new RightUpwardRightTriangle()
rightUp.twoDimensionArrayLogic(5, '@') // => twoDimensionArrayLogic(degree, shapeCharacter)

const matrix = new SquareMatrix('&', new RightUpwardRightTriangle()) // => SquareMatrix(shapeCharacter, pattern)
matrix.executePattern(7) // => executePattern(degree)
```

-   provided API    

```typescript
export { LeftDownwardRightTriangle } from 'awesome-matrix'
export { LeftUpwardRightTriangle } from 'awesome-matrix'
export { PyramidTriangle } from 'awesome-matrix'
export { RightDownwardRightTriangle } from 'awesome-matrix'
export { RightUpwardRightTriangle } from 'awesome-matrix'
export { SquareMatrix, IMatrixStrategy } from 'awesome-matrix'
```

### Examples

```typescript
import { IMatrixStrategy, SquareMatrix, LeftUpwardRightTriangle, PyramidTriangle } from 'awesome-matrix'

// get print shape '&' and pattern LeftUpward-RightTriangle
const leftUpward = new SquareMatrix('&', new LeftUpwardRightTriangle())
leftUpward.executePattern(7) // => degree : 7

// get print shape 'K' and pattern Pyramid
const pyramid = new SquareMatrix('K', new PyramidTriangle())
pyramid.executePattern(3) // => degree: 3
```

### CLI

-   help

```bash
$ matrix -h
```

-   Usage

```bash
Usage: matrix [Option]
Option :
    -h : Display this help message
    -p=pattern : pattern is one of (pyramid | leftUpward | rightUpward | leftDownward | rightDownward)
    -s=character : Users can choose the shape character (defaultValue -s=\*)
    -d=degree : Users can set the order of array (defaultValue -d=5)

$ matrix -d=degree (default option : pattern and shapeCharacter)
$ matrix -p=patterns -s=shapeCharacter -d=degree
```

-   Example

```bash
$ matrix

/* default matrix
      @
     @@@
    @@@@@
*/
```

```bash
$ matrix -p=leftUpward -s=# -d=6

/* conditional matrix
    #
    ##
    ###
    ####
    #####
    ######
*/
```

```bash
$ matrix -p=rightDownward -s=D

/* partial conditional matrix (degree is default(5))
    DDDDD
     DDDD
      DDD
       DD
        D
*/
```
