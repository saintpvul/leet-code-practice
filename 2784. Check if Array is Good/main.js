/*

You are given an integer array nums. We consider an array good if it is a permutation of an array base[n].

base[n] = [1, 2, ..., n - 1, n, n] (in other words, it is an array of length n + 1 which contains 1 to n - 1 exactly once, plus two occurrences of n). For example, base[1] = [1, 1] and base[3] = [1, 2, 3, 3].

Return true if the given array is good, otherwise return false.

Note: A permutation of integers represents an arrangement of these numbers.

*/

// solution

var isGood = function (nums) {
    const n = nums.length - 1;
    const count = nums.reduce(
        (counter, num) => counter.set(num, (counter.get(num) || 0) + 1),
        new Map()
    );
    return (
        [...Array(n).keys()].slice(1).every((i) => count.get(i) === 1) &&
        count.get(n) === 2
    );
};
