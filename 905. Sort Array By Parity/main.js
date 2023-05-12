/*

Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.

Return any array that satisfies this condition.

*/

// solution

// var sortArrayByParity = function (nums) {
//     let odd = [],
//         even = [];
//     for (let i = 0; i < nums.length; i++) {
//         !(nums[i] % 2) ? even.push(nums[i]) : odd.push(nums[i]);
//     }
//     return [...even, ...odd];
// };

// var sortArrayByParity = function (nums) {
//     let sorted = Array.from({ length: nums.length }).fill(0);
//     let i = 0;
//     let j = nums.length - 1;
//     for (const num of nums) {
//         if (num % 2) {
//             sorted[j] = num;
//             j--;
//         } else {
//             sorted[i] = num;
//             i++;
//         }
//     }
//     return sorted;
// };

// less memory used
const sortArrayByParity = function (nums) {
    let i = 0;
    let j = nums.length - 1;

    while (i < j) {
        while (nums[i] % 2 === 0 && i < j) {
            i++;
        }

        while (nums[j] % 2 !== 0 && i < j) {
            j--;
        }

        if (i < j) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i++;
            j--;
        }
    }

    return nums;
};
