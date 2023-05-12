/*

You are given a non-negative integer array nums. In one operation, you must:

Choose a positive integer x such that x is less than or equal to the smallest non-zero element in nums.
Subtract x from every positive element in nums.
Return the minimum number of operations to make every element in nums equal to 0.

*/

// solution

var minimumOperations = function (nums) {
    let count = 0;

    while (true) {
        let currentMin = Infinity;
        let hasPositive = false;

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > 0) {
                currentMin = Math.min(currentMin, nums[i]);
                hasPositive = true;
            }
        }

        if (!hasPositive) {
            break;
        }

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > 0) {
                nums[i] -= currentMin;
            }
        }

        count++;
    }

    return count;
};
