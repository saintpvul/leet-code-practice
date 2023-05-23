/*

Given two integer arrays nums1 and nums2, sorted in non-decreasing order, return the minimum integer common to both arrays. If there is no common integer amongst nums1 and nums2, return -1.

Note that an integer is said to be common to nums1 and nums2 if both arrays have at least one occurrence of that integer.

*/

// solution

//too much memory used
// var getCommon = function (nums1, nums2) {
//     const numbers = new Map();
//     for (let i = 0; i < nums1.length; i++) {
//         numbers.set(nums1[i], true);
//     }
//     for (let i = 0; i < nums2.length; i++) {
//         if (numbers.has(nums2[i])) {
//             return nums2[i];
//         }
//     }
//     return -1;
// };

// var getCommon = function (nums1, nums2) {
//     let numsSet = new Set(nums1);

//     for (const num of nums2) {
//         if (numsSet.has(num)) return num;
//     }
//     return -1;
// };

//two pointers
var getCommon = function (nums1, nums2) {
    for (let i = 0, j = 0; i < nums1.length && j < nums2.length; ) {
        if (nums1[i] < nums2[j]) {
            i++;
        } else if (nums1[i] > nums2[j]) {
            j++;
        } else {
            return nums1[i];
        }
    }
    return -1;
};

// //less memory but not so fast with bin search
// var getCommon = function (nums1, nums2) {
//     const search = (arr, target) => {
//         let left = 0,
//             right = arr.length - 1;
//         while (left <= right) {
//             let pivot = Math.floor(left + (right - left) / 2);
//             if (arr[pivot] === target) {
//                 return true;
//             } else if (arr[pivot] < target) {
//                 left = pivot + 1;
//             } else {
//                 right = pivot - 1;
//             }
//         }
//         return false;
//     };

//     const largest = nums1.length <= nums2.length ? nums1 : nums2;
//     const smallest = nums1.length <= nums2.length ? nums2 : nums1;

//     for (let i = 0; i < smallest.length; i++) {
//         const num = smallest[i];
//         if (search(largest, num)) {
//             return num;
//         }
//     }
//     return -1;
// };
