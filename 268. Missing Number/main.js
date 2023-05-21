/*

Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

*/

// solution

// using hashMap

// var missingNumber = function (nums) {
//     const numbers = new Set(
//         Array.from({ length: nums.length + 1 }, (_, idx) => idx)
//     );
//     for (const num of nums) {
//         numbers.delete(num);
//     }
//     return numbers.keys().next().value;
// };
//or

var missingNumber = function (nums) {
    const numbers = new Set(nums);

    for (let i = 0; i <= nums.length; i++) {
        if (!numbers.has(i)) {
            return i;
        }
    }
};

//the fastes way

// var missingNumber = function (nums) {
//     const n = nums.length;
//     const expected = (n * (n + 1)) / 2;
//     const actual = nums.reduce((sum, num) => sum + num, 0);
//     return expected - actual;
// };
