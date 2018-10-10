import {
    LeftDownwardRightTriangle,
    LeftUpwardRightTriangle,
    PyramidTriangle,
    RightDownwardRightTriangle,
    RightUpwardRightTriangle,
} from './squareMatrix'

const leftUpwardRightTriangle = new LeftUpwardRightTriangle('#')
const rightUpwardRightTriangle = new RightUpwardRightTriangle('^^')
const pyramidTriangle = new PyramidTriangle('$')
const leftDownwardRightTriangle = new LeftDownwardRightTriangle('P')
const rightDownwardRightTriangle = new RightDownwardRightTriangle('%')

leftUpwardRightTriangle.twoDimensionArrayLogic(4)
rightUpwardRightTriangle.twoDimensionArrayLogic(7)
pyramidTriangle.twoDimensionArrayLogic(7)
leftDownwardRightTriangle.twoDimensionArrayLogic(6)
rightDownwardRightTriangle.twoDimensionArrayLogic(5)
