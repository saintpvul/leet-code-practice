/*

You are given an integer n.

Each number from 1 to n is grouped according to the sum of its digits.

Return the number of groups that have the largest size.

*/

// solution

// var countLargestGroup = function (n) {
//     let groups = {};
//     for (let i = 1; i <= n; i++) {
//         let sum = i
//             .toString()
//             .split("")
//             .reduce((s, v) => (s += +v), 0);
//         groups[sum] ? groups[sum]++ : (groups[sum] = 1);
//     }
//     const largest = Math.max(...Object.values(groups));
//     return Object.values(groups).filter((e) => e === largest).length;
// };

// less memory usage

var countLargestGroup = function (n) {
    let groups = {};
    let maxCount = 0;

    for (let i = 1; i <= n; i++) {
        let sum = i
            .toString()
            .split("")
            .reduce((s, v) => (s += +v), 0);
        groups[sum] = (groups[sum] || 0) + 1;
        maxCount = Math.max(maxCount, groups[sum]);
    }

    let count = 0;
    for (let key in groups) {
        if (groups[key] === maxCount) {
            count++;
        }
    }

    return count;
};
Console;
