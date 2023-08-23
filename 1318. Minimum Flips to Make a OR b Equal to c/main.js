/*

Given 3 positives numbers a, b and c. Return the minimum flips required in some bits of a and b to make ( a OR b == c ). (bitwise OR operation).
Flip operation consists of change any single bit 1 to 0 or change the bit 0 to 1 in their binary representation.

*/

// solutuion

var minFlips = function (a, b, c) {
    let flips = 0;

    for (let i = 0; i < 32; i++) {
        const bitA = (a >> i) & 1;
        const bitB = (b >> i) & 1;
        const bitC = (c >> i) & 1;

        if ((bitA | bitB) !== bitC) {
            if (bitC === 0) {
                flips += bitA + bitB;
            } else {
                flips += bitA === 0 && bitB === 0 ? 1 : 0;
            }
        }
    }
    return flips;
};
