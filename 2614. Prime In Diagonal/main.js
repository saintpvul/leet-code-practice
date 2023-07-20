/*

You are given a 0-indexed two-dimensional integer array nums.

Return the largest prime number that lies on at least one of the diagonals of nums. In case, no prime is present on any of the diagonals, return 0.

Note that:

An integer is prime if it is greater than 1 and has no positive integer divisors other than 1 and itself.
An integer val is on one of the diagonals of nums if there exists an integer i for which nums[i][i] = val or an i for which nums[i][nums.length - i - 1] = val.


In the above diagram, one diagonal is [1,5,9] and another diagonal is [3,5,7].

*/

// solution

var diagonalPrime = function (nums) {
    function isPrime(x) {
        if (x < 2) {
            return false;
        }
        for (let i = 2; i <= Math.sqrt(x); i++) {
            if (x % i === 0) {
                return false;
            }
        }
        return true;
    }

    const n = nums.length;
    let ans = 0;
    for (let i = 0; i < n; i++) {
        if (isPrime(nums[i][i])) {
            ans = Math.max(ans, nums[i][i]);
        }
        if (isPrime(nums[i][n - i - 1])) {
            ans = Math.max(ans, nums[i][n - i - 1]);
        }
    }
    return ans;
};
