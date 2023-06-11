/*

Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

*/

// solution

var searchRange = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;

    let res = [-1, -1];

    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
        if (nums[mid] === target) {
            res[0] = mid;
            res[1] = mid;

            let i = mid - 1;
            while (i >= left && nums[i] === target) {
                res[0] = i;
                i--;
            }
            let j = mid + 1;

            while (j <= right && nums[j] === target) {
                res[1] = j;
                j++;
            }
            break;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return res;
};
