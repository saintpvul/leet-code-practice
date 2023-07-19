/*

You are given two 0-indexed integer arrays nums and divisors.

The divisibility score of divisors[i] is the number of indices j such that nums[j] is divisible by divisors[i].

Return the integer divisors[i] with the maximum divisibility score. If there is more than one integer with the maximum score, return the minimum of them. 

*/

// solution

var maxDivScore = function (nums, divisors) {
    let maxCount = 0;
    let maxDiv = Infinity;
    for (let i = 0; i < divisors.length; i++) {
        let count = 0;
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] % divisors[i] === 0) {
                count++;
            }
        }
        if (count > maxCount || (count === maxCount && divisors[i] < maxDiv)) {
            maxCount = count;
            maxDiv = divisors[i];
        }
    }
    return maxDiv;
};
