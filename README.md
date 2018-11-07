#awesome-twoDimensional-matrix

This is a simple two-dimensional matrix library written by [TypeScript](https://www.typescriptlang.org/docs/home.html) that receives input from the user.

- This is written in TypeScript
- Compile to javascript using ts-node
- Provides basically five patterns.

#Installation
<code>**npm install awesome-twoDimensional-matrix**</code>

#Usage
<pre>
const SquareMatrix = require('squareMatrix')

//user-defined matrix
class UserDefinedMatrix implements IMatrixStrategy{
    public twoDimensionArrayLogic(degree: number, stringShape: string): string[][] {
    
    // ...
   
   }
}


const userDefinedMatrix = new SquareMatrix('*', new UserDefinedMatrix())
userDefinedMatrix.executePattern(4)
</pre>

<pre>
//This offer 5 patterns matrix 
import { LeftDownwardRightTriangle } from './patterns/leftDownwardRightTriangle'
import { LeftUpwardRightTriangle } from './patterns/leftUpwardRightTriangle'
import { PyramidTriangle } from './patterns/pyramidTriangle'
import { RightDownwardRightTriangle } from './patterns/rightDownwardRightTriangle'
import { RightUpwardRightTriangle } from './patterns/rightUpwardRightTriangle'
import { SquareMatrix } from './squareMatrix'

const leftUpwardRightTriangle = new SquareMatrix(5, new LeftUpwardRightTriangle())
const rightUpwardRightTriangle = new SquareMatrix('%', new RightUpwardRightTriangle())
const pyramidTriangle = new SquareMatrix('+', new PyramidTriangle())
const leftDownwardRightTriangle = new SquareMatrix('K', new LeftDownwardRightTriangle())
const rightDownwardRightTriangle = new SquareMatrix('*', new RightDownwardRightTriangle())

leftUpwardRightTriangle.executePattern(4)
rightUpwardRightTriangle.executePattern(7)
pyramidTriangle.executePattern(7)
leftDownwardRightTriangle.executePattern(9)
rightDownwardRightTriangle.executePattern(6)

</pre>

#CLI 
<pre>
// call usage
$matrix (-h|-help)

//default matrix (-p=pyramid -d=5 -s=*)
$matrix

//usage
$ matrix shapeCaracter degree (default pattern)
$ matrix patterns shapeCharacter degree

//example
$ matrix
$ matrix -p=leftUpward -s=@ -d=7

</pre>

#Running specs
<code>npm run test</code> to run the specs

#Dependencies
To run this project we need to have:
- ts-node



