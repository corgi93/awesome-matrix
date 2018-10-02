//첫 번째 패턴
export function firstMatrix(degree: number): Array<Array<string>> {
    console.log("firstdMatrix");
    const twoDimensionArray: Array<Array<string>> = [];

    for (let r = 0; r < degree; r++) {
        twoDimensionArray[r] = [];
        for (let c = 0; c < degree; c++) {
            if (c > r) {
                twoDimensionArray[r][c] = " ";
            } else {
                twoDimensionArray[r][c] = "*";
            }
        }
    }
    return twoDimensionArray;
}


//두 번째 패턴
export function secondMatrix(degree: number): Array<Array<string>> {
    console.log("secondMatrix");
    const twoDimensionArray: Array<Array<string>> = [];

    for (let r = 0; r < degree; r++) {
        twoDimensionArray[r] = [];
        for (let c = 0; c < degree; c++) {
            if (r + c >= degree - 1) {
                twoDimensionArray[r][c] = "*";
            } else {
                twoDimensionArray[r][c] = " ";
            }
        }
    }
    return twoDimensionArray;
}


// 세 번쨰 패턴
export function thirdMatrix(degree: number): Array<Array<string>> {
    console.log("thirdMatrix");

    if (degree % 2 == 0) {
        throw new Error('even degree could not make pyramid');
    }
    const floor = Math.floor(degree / 2); //floor =2
    const twoDimensionArray: Array<Array<string>> = [];
    try {
        for (let r = 0; r < degree; r++) {
            twoDimensionArray[r] = [];
            for (let c = 0; c < degree; c++) {
                const sum = r + c;
                const sub = c - r;
                //row값이 0과 2의 배수일 경우만 조건부 별 찍기. 2*r-1인 경우는 공백 출력.
                if (r <= floor) {
                    if ((sum >= floor) && (sub <= floor)) {
                        twoDimensionArray[r][c] = "*";
                    } else {
                        twoDimensionArray[r][c] = " ";
                    }
                } else {
                    twoDimensionArray[r][c] = " ";
                }
            }
        }
    } catch (e) {
        console.log(e);
    }
    return twoDimensionArray;
}

//네 번째 패턴
export function fourthMatrix(degree: number): Array<Array<string>> {
    console.log("foutrh Matrix");
    const twoDimensionArray: Array<Array<string>> = [];

    for (let r = 0; r < degree; r++) {
        twoDimensionArray[r] = [];
        for (let c = 0; c < degree; c++) {
            if (r + c <= degree - 1) {
                twoDimensionArray[r][c] = "*";
            } else {
                twoDimensionArray[r][c] = " ";
            }
        }
    }
    return twoDimensionArray;
}

//다섯 번째 패턴
export function fifthMatrix(degree: number): Array<Array<string>> {
    console.log("fifthMatrix");
    const twoDimensionArray: Array<Array<string>> = [];
    for (let r = 0; r < degree; r++) {
        twoDimensionArray[r] = [];
        for (let c = 0; c < degree; c++) {
            if (c < r) {
                twoDimensionArray[r][c] = " ";
            } else {
                twoDimensionArray[r][c] = "*";
            }
        }
    }
    return twoDimensionArray;
}


// 기본 정방행렬
export function squareMatrix(degree: number): Array<Array<string>> {
    console.log("basic square Matrix");
    const twoDimensionArray: Array<Array<string>> = [];
    for (let r = 0; r < degree; r++) {
        twoDimensionArray[r] = [];
        for (let c = 0; c < degree; c++) {
            twoDimensionArray[r][c] = "*";
        }
    }
    return twoDimensionArray;
}