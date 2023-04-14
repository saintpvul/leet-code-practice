/*

Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

*/

// solution

var searchInsert = function (nums, target) {
    let min = 0;
    let max = nums.length - 1;

    let targetIdx;

    if (target > nums[max]) return max + 1;

    while (min <= max) {
        let mid = Math.floor((min + max) / 2);
        let midValue = nums[mid];
        if (midValue === target) {
            targetIdx = mid;
            break;
        } else if (midValue < target) {
            min = mid + 1;
            targetIdx = mid;
        } else if (target > nums[min] && target < nums[max]) {
            targetIdx = min + 1;
            min++;
        } else {
            max = mid - 1;
            targetIdx = mid;
        }
    }
    return targetIdx;
};
