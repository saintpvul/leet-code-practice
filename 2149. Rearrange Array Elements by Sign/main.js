/*

You are given a 0-indexed integer array nums of even length consisting of an equal number of positive and negative integers.

You should rearrange the elements of nums such that the modified array follows the given conditions:

Every consecutive pair of integers have opposite signs.
For all integers with the same sign, the order in which they were present in nums is preserved.
The rearranged array begins with a positive integer.
Return the modified array after rearranging the elements to satisfy the aforementioned conditions.

*/

// solution

var rearrangeArray = function (nums) {
    let neg = 1;
    let pos = 0;
    const res = Array.from({ length: nums.length });

    for (const num of nums) {
        if (num > 0) {
            res[pos] = num;
            pos += 2;
        } else {
            res[neg] = num;
            neg += 2;
        }
    }
    return res;
};
