/*

Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.

*/

// solution

var thirdMax = function (nums) {
    let first = -Infinity;
    let second = -Infinity;
    let third = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === first || nums[i] === second || nums[i] === third) {
            continue;
        }

        if (nums[i] > first) {
            third = second;
            second = first;
            first = nums[i];
        } else if (nums[i] > second) {
            third = second;
            second = nums[i];
        } else if (nums[i] > third) {
            third = nums[i];
        }
    }
    return third === -Infinity ? first : third;
};

//  var thirdMax = function (nums) {
//      let uniq = new Set(nums);
//      let sorted = Array.from(uniq).sort((a, b) => b - a);
//      return sorted.length > 2 ? sorted[2] : sorted[0];
//  };
