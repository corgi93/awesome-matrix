import { squareMatrix } from './squareMatrix'

describe('squareMatrix test', () => {
    it('should  be 7 degree matrix when given degree = 7 & pattern = leftUpwardRightTriangle ', () => {
        expect(squareMatrix(7,1)).toEqual([
            ['*', ' ', ' ', ' ', ' ', ' ', ' '],
            ['*', '*', ' ', ' ', ' ', ' ', ' '],
            ['*', '*', '*', ' ', ' ', ' ', ' '],
            ['*', '*', '*', '*', ' ', ' ', ' '],
            ['*', '*', '*', '*', '*', ' ', ' '],
            ['*', '*', '*', '*', '*', '*', ' '],
            ['*', '*', '*', '*', '*', '*', '*']
        ]);
    });
    it('should  be 4 degree matrix when given degree = 4 & pattern = rightUpwardRightTriangle', () => {
        expect(squareMatrix(4,2)).toEqual([
            [' ', ' ', ' ', '*'],
            [' ', ' ', '*', '*'],
            [' ', '*', '*', '*'],
            ['*', '*', '*', '*'],
        ]);
    });

    it('should  be 5 degree matrix when given degree = 5 & pattern = pyramidMatrix', () => {
        expect(squareMatrix(5,3)).toEqual([
            [' ', ' ', '*', ' ', ' '],
            [' ', '*', '*', '*', ' '],
            ['*', '*', '*', '*', '*'],
            [' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' '],
        ]);
    });

    it('should  be 6 degree matrix when given degree = 6 & pattern = leftDownwardRightTriangle', () => {
        expect(squareMatrix(6,4)).toEqual([
            ['*', '*', '*', '*', '*', '*'],
            ['*', '*', '*', '*', '*', ' '],
            ['*', '*', '*', '*', ' ', ' '],
            ['*', '*', '*', ' ', ' ', ' '],
            ['*', '*', ' ', ' ', ' ', ' '],
            ['*', ' ', ' ', ' ', ' ', ' '],
        ]);
    });
    it('should  be 6 degree matrix when given degree = 6 & pattern = rightDownwardRightTriangle', () => {
        expect(squareMatrix(6,5)).toEqual([
            ['*', '*', '*', '*', '*', '*'],
            [' ', '*', '*', '*', '*', '*'],
            [' ', ' ', '*', '*', '*', '*'],
            [' ', ' ', ' ', '*', '*', '*'],
            [' ', ' ', ' ', ' ', '*', '*'],
            [' ', ' ', ' ', ' ', ' ', '*'],
        ]);
    });
});
