import {fifthMatrix, firstMatrix, fourthMatrix, secondMatrix, squareMatrix, thirdMatrix} from './squareMatrix'

describe('squareMatrix test', () => {
    it('should  be 7 degree matrix when given 7 in the firstMatrix()', ()=>{
        expect(firstMatrix(7)).toEqual([
            [ '*', ' ', ' ', ' ', ' ', ' ', ' ' ],
            [ '*', '*', ' ', ' ', ' ', ' ', ' ' ],
            [ '*', '*', '*', ' ', ' ', ' ', ' ' ],
            [ '*', '*', '*', '*', ' ', ' ', ' ' ],
            [ '*', '*', '*', '*', '*', ' ', ' ' ],
            [ '*', '*', '*', '*', '*', '*', ' ' ],
            [ '*', '*', '*', '*', '*', '*', '*' ]
        ]);
    });
    it('should  be 4 degree matrix when given  4 in the secondMatrix()', ()=>{
        expect(secondMatrix(4)).toEqual([
            [ ' ', ' ', ' ', '*'],
            [ ' ', ' ', '*', '*'],
            [ ' ', '*', '*', '*'],
            [ '*', '*', '*', '*'],
        ]);
    });

    it('should  be 5 degree matrix when given  4 in the secondMatrix()', ()=>{
        expect(thirdMatrix(5)).toEqual([
            [ ' ', ' ', '*', ' ', ' '],
            [ ' ', '*', '*', '*', ' '],
            [ '*', '*', '*', '*', '*'],
            [ ' ', ' ', ' ', ' ', ' '],
            [ ' ', ' ', ' ', ' ', ' '],
        ]);
    });

    it('should  be 6 degree matrix when given  6 in the fourthMatrix()', ()=>{
        expect(fourthMatrix(6)).toEqual([
            [ '*', '*', '*', '*','*','*'],
            [ '*', '*', '*', '*','*',' '],
            [ '*', '*', '*', '*',' ',' '],
            [ '*', '*', '*', ' ',' ',' '],
            [ '*', '*', ' ', ' ',' ',' '],
            [ '*', ' ', ' ', ' ',' ',' '],
        ]);
    });
    it('should  be 6 degree matrix when given  6 in the fifthMatrix()', ()=>{
        expect(fifthMatrix(6)).toEqual([
            [ '*', '*', '*', '*','*','*'],
            [ ' ','*', '*', '*', '*','*'],
            [ ' ', ' ', '*', '*','*','*'],
            [ ' ', ' ', ' ', '*','*','*'],
            [ ' ', ' ', ' ', ' ','*','*'],
            [ ' ', ' ', ' ', ' ',' ','*'],
        ]);
    });
    it('should be 3 dgree matrix when given input = 3', () => {
        expect(squareMatrix(3)).toEqual([
            ["*", "*", "*"],
            ["*", "*", "*"],
            ["*", "*", "*"]
        ]);
    });
});
