/*

You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

You are given an integer array nums representing the data status of this set after the error.

Find the number that occurs twice and the number that is missing and return them in the form of an array.

*/

// solution

var findErrorNums = function (nums) {
    let frequency = new Array(nums.length + 1).fill(0);
    let duplicate, missing;

    for (let i = 0; i < nums.length; i++) {
        frequency[nums[i]]++;

        if (frequency[nums[i]] === 2) {
            duplicate = nums[i];
        }
    }

    for (let i = 1; i < frequency.length; i++) {
        if (frequency[i] === 0) {
            missing = i;
            break;
        }
    }

    return [duplicate, missing];
};
