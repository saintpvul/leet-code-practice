/*

Given an integer array nums, return the greatest common divisor of the smallest number and largest number in nums.

The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.

*/

// solution

var findGCD = function (nums) {
    let min = Math.min(...nums);
    let max = Math.max(...nums);
    let divisor = 0;
    for (let i = 0; i <= min; i++) {
        if (!(min % i) && !(max % i)) {
            divisor = i;
        }
    }
    return divisor;
};
