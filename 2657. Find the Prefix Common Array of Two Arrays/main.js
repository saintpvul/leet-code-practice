/*

You are given two 0-indexed integer permutations A and B of length n.

A prefix common array of A and B is an array C such that C[i] is equal to the count of numbers that are present at or before the index i in both A and B.

Return the prefix common array of A and B.

A sequence of n integers is called a permutation if it contains all integers from 1 to n exactly once.

*/

// solution

var findThePrefixCommonArray = function (A, B) {
    const res = Array.from({ length: A.length });
    const hasA = new Set();
    const hasB = new Set();
    let count = 0;

    for (let i = 0; i < res.length; i++) {
        if (hasB.has(A[i])) {
            count++;
        }
        hasA.add(A[i]);
        if (hasA.has(B[i])) {
            count++;
        }
        hasB.add(B[i]);
        res[i] = count;
    }
    return res;
};
