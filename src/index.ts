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
