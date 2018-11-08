# awesome-matrix

This is a simple two-dimensional matrix library written by [TypeScript](https://www.typescriptlang.org/docs/home.html) 
that receives input options from the user.

-   This is written in TypeScript
-   Compile to javascript using ts-node
-   Provides basically five patterns.

# Installation

<code>**npm install awesome-matrix**</code>

# Usage

```typescript
const { SquareMatrix } = require('squareMatrix')

const rightUp = new SquareMatrix('&', new RightUpwardRightTriangle())
rightUp.executePattern(7) // => degree : 7
```

- provided patterns

```typescript
export { LeftDownwardRightTriangle } from './patterns/leftDownwardRightTriangle'
export { LeftUpwardRightTriangle } from './patterns/leftUpwardRightTriangle'
export { PyramidTriangle } from './patterns/pyramidTriangle'
export { RightDownwardRightTriangle } from './patterns/rightDownwardRightTriangle'
export { RightUpwardRightTriangle } from './patterns/rightUpwardRightTriangle'
export { SquareMatrix, IMatrixStrategy } from './squareMatrix'
```

# Examples

```typescript
import { SquareMatrix } from '../squareMatrix'

// get print shape '&' and pattern LeftUpward-RightTriangle
const leftUpward = new SquareMatrix('&', new LeftUpwardRightTriangle())
leftUpward.executePattern(7) // => degree : 7

// get print shape 'K' and pattern Pyramid
const pyramid = new SquareMatrix('K', new PyramidTriangle())
pyramid.executePattern(3) // => degree: 3
```

# CLI

```
// help
$matrix -h


// Usage
$ matrix degree (default option : pattern and character)
$ matrix patterns character degree

// Example
$ matrix

/* default matrix
==============
      @
     @@@
    @@@@@
==============
*/

$ matrix -p=leftUpward -s=# -d=6

/* conditional matrix
==============
    #
    ##
    ###
    ####
    #####
    ######
==============
*/

$ matrix -p=rightDownward -s=D

/* partial conditional matrix (degree is default(5))
==============
    DDDDD
     DDDD
      DDD
       DD
        D
==============
*/
```

# Running specs

<code>npm run test</code> to run the specs

# Dependencies

To run this project we need to have:

-   ts-node
