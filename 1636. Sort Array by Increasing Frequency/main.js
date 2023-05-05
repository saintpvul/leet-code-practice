/*

Given an array of integers nums, sort the array in increasing order based on the frequency of the values. If multiple values have the same frequency, sort them in decreasing order.

Return the sorted array.

*/

// solution

var frequencySort = function (nums) {
    let count = {};
    for (const num of nums) {
        count[num] ? count[num]++ : (count[num] = 1);
    }

    let res = [];
    count = Object.entries(count).sort((a, b) =>
        a[1] === b[1] ? b[0] - a[0] : a[1] - b[1]
    );
    for (const val in count) {
        while (count[val][1] > 0) {
            res.push(+count[val][0]);
            count[val][1]--;
        }
    }
    return res;
};
