import { LeftDownwardRightTriangle } from './LeftDownwardRightTriangle'
import { LeftUpwardRightTriangle } from './LeftUpwardRightTriangle'
import { PyramidTriangle } from './PyramidTriangle'
import { RightDownwardRightTriangle } from './RightDownwardRightTriangle'
import { RightUpwardRightTriangle } from './RightUpwardRightTriangle'
import { Matrix } from './squareMatrix'

const leftUpwardRightTriangle = new Matrix('$', new LeftUpwardRightTriangle())
const rightUpwardRightTriangle = new Matrix('%', new RightUpwardRightTriangle())
const pyramidTriangle = new Matrix('+', new PyramidTriangle())
const leftDownwardRightTriangle = new Matrix('K', new LeftDownwardRightTriangle())
const rightDownwardRightTriangle = new Matrix('?', new RightDownwardRightTriangle())

leftUpwardRightTriangle.executePattern(4)
rightUpwardRightTriangle.executePattern(7)
pyramidTriangle.executePattern(7)
leftDownwardRightTriangle.executePattern(6)
rightDownwardRightTriangle.executePattern(5)
