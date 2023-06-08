/*

Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

*/

// solution

// var countBits = function (n) {
//     let ans = Array.from({ length: n + 1 });
//     for (let i = 0; i <= n; i++) {
//         const count = i.toString(2).replace(/[0]/gi, "").length;
//         ans[i] = count;
//     }
//     return ans;
// };

//using bitwise operator is more efficient
var countBits = function (n) {
    const bitsCount = new Array(n + 1).fill(0);

    for (let i = 1; i <= n; i++) {
        bitsCount[i] = bitsCount[i >> 1] + (i & 1);
    }

    return bitsCount;
};
