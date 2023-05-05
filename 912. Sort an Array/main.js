/*

Given an array of integers nums, sort the array in ascending order and return it.

You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.

*/

// solution

var sortArray = function (nums) {
    const min = Math.min(...nums);
    const max = Math.max(...nums);
    const temp = Array.from({ length: max - min + 1 }, () => 0);

    for (const num of nums) {
        temp[num - min]++;
    }

    let curr = 0;
    for (let i = 0; i < temp.length; i++) {
        while (temp[i]) {
            nums[curr] = min + i;
            curr++;
            temp[i]--;
        }
    }

    return nums;
};
