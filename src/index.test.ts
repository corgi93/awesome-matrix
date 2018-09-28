import { squareMatrix } from './squareMatrix'

describe('squareMatrix test', () => {
    it('should be 3 dgree matrix', () => {
        expect(squareMatrix(3)).toEqual([["*", " ", " "],
                                                           ["*", "*", " "],
                                                           ["*", "*", "*"]])
    });
    it('should be 5 dgree matrix ', () => {
        expect(squareMatrix(5)).toEqual([["*", " ", " ", " ", " "],
                                                           ["*", "*", " ", " ", " "],
                                                           ["*", "*", "*", " ", " "],
                                                           ["*", "*", "*", "*", " "],
                                                           ["*", "*", "*", "*", "*"]])
    });
});
