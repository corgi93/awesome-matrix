import {squareMatrix} from './squareMatrix'

describe('squareMatrix test', () => {
    it('should be 3 dgree matrix when given input =  3', () => {
        expect(squareMatrix(3)).toEqual([
                ["*", " ", " "],
                ["*", "*", " "],
                ["*", "*", "*"]
        ])
    });

    it('should be 5 dgree matrix when given input = 5 ', () => {
        expect(squareMatrix(5)).toEqual([
            ["*", " ", " ", " ", " "],
            ["*", "*", " ", " ", " "],
            ["*", "*", "*", " ", " "],
            ["*", "*", "*", "*", " "],
            ["*", "*", "*", "*", "*"]
        ])
    });
});
