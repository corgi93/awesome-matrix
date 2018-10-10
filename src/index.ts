import { LeftDownwardRightTriangle } from './LeftDownwardRightTriangle'
import { LeftUpwardRightTriangle } from './LeftUpwardRightTriangle'
import { PyramidTriangle } from './PyramidTriangle'
import { RightDownwardRightTriangle } from './RightDownwardRightTriangle'
import { RightUpwardRightTriangle } from './RightUpwardRightTriangle'
import { Matrix } from './squareMatrix'

const matrix1 = new Matrix('$', new LeftUpwardRightTriangle())
const matrix2 = new Matrix('%', new RightUpwardRightTriangle())
const matrix3 = new Matrix('+', new PyramidTriangle())
const matrix4 = new Matrix('K', new LeftDownwardRightTriangle())
const matrix5 = new Matrix('?', new RightDownwardRightTriangle())

matrix1.executePattern(4)
matrix2.executePattern(7)
matrix3.executePattern(7)
matrix4.executePattern(6)
matrix5.executePattern(5)
