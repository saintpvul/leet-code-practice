/*

A square triple (a,b,c) is a triple where a, b, and c are integers and a2 + b2 = c2.

Given an integer n, return the number of square triples such that 1 <= a, b, c <= n.

*/

// solution

var countTriples = function (n) {
    let count = 0;

    for (let a = 1; a <= n; a++) {
        for (let b = 1; b <= n; b++) {
            for (let c = 1; c <= n; c++) {
                if (a * a + b * b === c * c) {
                    count++;
                }
            }
        }
    }

    return count;
};
