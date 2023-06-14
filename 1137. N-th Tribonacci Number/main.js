/*

The Tribonacci sequence Tn is defined as follows: 

T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.

Given n, return the value of Tn.

*/

// solution

var tribonacci = function (n) {
    if (n === 0) return 0;
    if (n === 1 || n === 2) return 1;

    let tnMinus3 = 0;
    let tnMinus2 = 1;
    let tnMinus1 = 1;
    let tn = 0;

    for (let i = 3; i <= n; i++) {
        tn = tnMinus3 + tnMinus2 + tnMinus1;
        tnMinus3 = tnMinus2;
        tnMinus2 = tnMinus1;
        tnMinus1 = tn;
    }

    return tn;
};
