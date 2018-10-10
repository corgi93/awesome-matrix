import { LeftDownwardRightTriangle } from 'patterns/leftDownwardRightTriangle'
import { LeftUpwardRightTriangle } from 'patterns/leftUpwardRightTriangle'
import { PyramidTriangle } from 'patterns/pyramidTriangle'
import { RightDownwardRightTriangle } from 'patterns/rightDownwardRightTriangle'
import { RightUpwardRightTriangle } from 'patterns/rightUpwardRightTriangle'
import { Matrix } from 'squareMatrix'

const leftUpwardRightTriangle = new Matrix(5, new LeftUpwardRightTriangle())
const rightUpwardRightTriangle = new Matrix('%', new RightUpwardRightTriangle())
const pyramidTriangle = new Matrix('+', new PyramidTriangle())
const leftDownwardRightTriangle = new Matrix('K', new LeftDownwardRightTriangle())
const rightDownwardRightTriangle = new Matrix('*', new RightDownwardRightTriangle())

leftUpwardRightTriangle.executePattern(4)
rightUpwardRightTriangle.executePattern(7)
pyramidTriangle.executePattern(7)
leftDownwardRightTriangle.executePattern(9)
rightDownwardRightTriangle.executePattern(6)
