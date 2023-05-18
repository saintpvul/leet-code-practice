/*

You are given an integer array nums and an integer k.

In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.

Return the maximum number of operations you can perform on the array.

*/

// solution

// var maxOperations = function (nums, k) {
//     let map = {};
//     let count = 0;

//     for (const num of nums) {
//         const exp = k - num;
//         if (map[exp] && map[exp] > 0) {
//             count++;
//             map[exp]--;
//         } else {
//             map[num] ? map[num]++ : (map[num] = 1);
//         }
//     }
//     return count;
// };

var maxOperations = function (nums, k) {
    let map = new Map();
    let count = 0;

    for (const num of nums) {
        const exp = k - num;
        if (map.has(exp) && map.get(exp) > 0) {
            count++;
            map.set(exp, map.get(exp) - 1);
        } else {
            map.set(num, (map.get(num) || 0) + 1);
        }
    }

    return count;
};
