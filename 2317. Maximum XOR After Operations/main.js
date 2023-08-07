/*

You are given a 0-indexed integer array nums. In one operation, select any non-negative integer x and an index i, then update nums[i] to be equal to nums[i] AND (nums[i] XOR x).

Note that AND is the bitwise AND operation and XOR is the bitwise XOR operation.

Return the maximum possible bitwise XOR of all elements of nums after applying the operation any number of times.

*/

// solution

var maximumXOR = function (nums) {
    const n = nums.length;
    if (n === 1) return nums[0];

    const x = Math.max(...nums);
    let bits = Math.floor(Math.log2(x)) + 1;
    let j = 0;
    let res = 0;

    while (bits--) {
        let c = 0;
        for (const i of nums) {
            if (i & (1 << j)) {
                c = 1;
                res += Math.pow(2, j);
                break;
            }
        }
        j++;
    }

    return res;
};
