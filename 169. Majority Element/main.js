/*

Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

*/

// solution

var majorityElement = function (nums) {
    let count = {};
    let maj = nums.length / 2;
    for (let num of nums) {
        count[num] ? count[num]++ : (count[num] = 1);
    }
    for (let el in count) {
        if (count[el] > maj) {
            return el;
        }
    }
};
