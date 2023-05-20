/*

Given a 2D integer array nums where nums[i] is a non-empty array of distinct positive integers, return the list of integers that are present in each array of nums sorted in ascending order.

*/

//

var intersection = function (nums) {
    let intersection = {};

    for (let array of nums) {
        for (let i = 0; i < array.length; i++) {
            intersection[array[i]]
                ? intersection[array[i]]++
                : (intersection[array[i]] = 1);
        }
    }

    let res = [];

    for (let key in intersection) {
        if (intersection[key] === nums.length) {
            res.push(+key);
        }
    }
    return res;
};
