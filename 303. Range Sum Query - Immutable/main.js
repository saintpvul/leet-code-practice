/*

Given an integer array nums, handle multiple queries of the following type:

Calculate the sum of the elements of nums between indices left and right inclusive where left <= right.
Implement the NumArray class:

NumArray(int[] nums) Initializes the object with the integer array nums.
int sumRange(int left, int right) Returns the sum of the elements of nums between indices left and right inclusive (i.e. nums[left] + nums[left + 1] + ... + nums[right]).

*/

// solution

// class NumArray {
//     constructor(nums) {
//         this.arr = nums;
//     }

//     sumRange(left, right) {
//         let sum = 0;
//         for (let i = left; i <= right; i++) {
//             sum += this.arr[i];
//         }
//         return sum;
//     }
// }

// a bit faster

class NumArray {
    constructor(nums) {
        this.prefixSum = [];
        this.prefixSum[0] = 0;

        for (let i = 1; i <= nums.length; i++) {
            this.prefixSum[i] = this.prefixSum[i - 1] + nums[i - 1];
        }
    }

    sumRange(left, right) {
        return this.prefixSum[right + 1] - this.prefixSum[left];
    }
}
