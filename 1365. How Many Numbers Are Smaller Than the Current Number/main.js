/*

Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

Return the answer in an array.

*/

// solution

var smallerNumbersThanCurrent = function (nums) {
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        let counter = 0;
        for (let j = 0; j < nums.length; j++) {
            if (i === j) {
                continue;
            } else {
                if (nums[i] > nums[j]) {
                    counter++;
                }
            }
        }
        res.push(counter);
    }
    return res;
};
