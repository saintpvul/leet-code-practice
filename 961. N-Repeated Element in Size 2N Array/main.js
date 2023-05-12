/*

You are given an integer array nums with the following properties:

nums.length == 2 * n.
nums contains n + 1 unique elements.
Exactly one element of nums is repeated n times.
Return the element that is repeated n times.

*/

// solution

// slower

/*
var repeatedNTimes = function (nums) {
    let n = nums.length / 2;
    let counter = {};
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        counter[element] ? counter[element]++ : (counter[element] = 1);
        if (counter[element] === n) return element;
    }
};
*/

var repeatedNTimes = function (nums) {
    let elements = {};
    for (let element of nums) {
        if (elements[element]) return element;
        elements[element] = 1;
    }
};
