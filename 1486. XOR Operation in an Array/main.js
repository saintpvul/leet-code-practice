/*

You are given an integer n and an integer start.

Define an array nums where nums[i] = start + 2 * i (0-indexed) and n == nums.length.

Return the bitwise XOR of all elements of nums.

*/

// solution

var xorOperation = function (n, start) {
    let xor = 0;

    for (let i = 0; i < n; i++) {
        xor ^= start + 2 * i;
    }
    return xor;
};
