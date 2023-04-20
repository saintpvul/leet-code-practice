/*

Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

*/

// solution

var generate = function (numRows) {
    let res = [[1]];
    let curr = [];
    for (let i = 1; i < numRows; i++) {
        let k = 0;
        let n = 1;
        curr = Array(i + 1).fill(1);
        for (let j = 1; j < curr.length - 1; j++) {
            curr[j] = res[i - 1][k] + res[i - 1][n];
            k++;
            n++;
        }
        res.push(curr);
    }
    return res;
};
