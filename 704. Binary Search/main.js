/*

Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

*/

// solution

// var search = function (nums, target) {
//     let left = 0,
//         right = nums.length - 1;

//     while (left <= right) {
//         mid = Math.floor((left + right) / 2);

//         if (nums[mid] === target) {
//             return mid;
//         }
//         if (nums[mid] < target) {
//             left = mid + 1;
//         } else {
//             right = mid - 1;
//         }
//     }
//     return -1;
// };
//a bit faster way

var search = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let pivot = Math.floor(left + (right - left) / 2);
        if (nums[pivot] === target) {
            return pivot;
        } else if (nums[pivot] < target) {
            left = pivot + 1;
        } else {
            right = pivot - 1;
        }
    }
    return -1;
};
