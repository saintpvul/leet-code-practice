/*

You are given a binary array nums (0-indexed).

We define xi as the number whose binary representation is the subarray nums[0..i] (from most-significant-bit to least-significant-bit).

For example, if nums = [1,0,1], then x0 = 1, x1 = 2, and x2 = 5.
Return an array of booleans answer where answer[i] is true if xi is divisible by 5.

*/

// solution

var prefixesDivBy5 = function (nums) {
    const res = [];
    let dec = 0;

    for (let i = 0; i < nums.length; i++) {
        dec = (((dec * 2) % 5) + nums[i]) % 5;
        res.push(dec === 0);
    }

    return res;
};
