/*

You are given a 0-indexed integer array nums. A pair of indices i, j where 0 <= i < j < nums.length is called beautiful if the first digit of nums[i] and the last digit of nums[j] are coprime.

Return the total number of beautiful pairs in nums.

Two integers x and y are coprime if there is no integer greater than 1 that divides both of them. In other words, x and y are coprime if gcd(x, y) == 1, where gcd(x, y) is the greatest common divisor of x and y.

*/

// solution

var countBeautifulPairs = function (nums) {
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (gcd(firstDigit(nums[i]), lastDigit(nums[j])) === 1) {
                count++;
            }
        }
    }

    return count;
};

function firstDigit(num) {
    return parseInt(num.toString()[0]);
}

function lastDigit(num) {
    return num % 10;
}

function gcd(x, y) {
    return y === 0 ? x : gcd(y, x % y);
}
