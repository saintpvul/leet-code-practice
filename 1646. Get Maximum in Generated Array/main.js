/*

You are given an integer n. A 0-indexed integer array nums of length n + 1 is generated in the following way:

nums[0] = 0
nums[1] = 1
nums[2 * i] = nums[i] when 2 <= 2 * i <= n
nums[2 * i + 1] = nums[i] + nums[i + 1] when 2 <= 2 * i + 1 <= n
Return the maximum integer in the array nums​​​.

*/

// solution

var getMaximumGenerated = function (n) {
    if (n === 0) return 0;
    let gen = Array(n + 1).fill(0);
    gen[1] = 1;
    let maxNum = 1;

    for (let i = 1; i <= n; i++) {
        if (2 * i <= n) {
            gen[2 * i] = gen[i];
            maxNum = Math.max(maxNum, gen[2 * i]);
        }
        if (2 * i + 1 <= n) {
            gen[2 * i + 1] = gen[i] + gen[i + 1];
            maxNum = Math.max(maxNum, gen[2 * i + 1]);
        }
    }
    return maxNum;
};
