/*

You are given a string s consisting of lowercase English letters, and an integer k.

First, convert s into an integer by replacing each letter with its position in the alphabet (i.e., replace 'a' with 1, 'b' with 2, ..., 'z' with 26). Then, transform the integer by replacing it with the sum of its digits. Repeat the transform operation k times in total.

For example, if s = "zbax" and k = 2, then the resulting integer would be 8 by the following operations:

Convert: "zbax" ➝ "(26)(2)(1)(24)" ➝ "262124" ➝ 262124
Transform #1: 262124 ➝ 2 + 6 + 2 + 1 + 2 + 4 ➝ 17
Transform #2: 17 ➝ 1 + 7 ➝ 8
Return the resulting integer after performing the operations described above.

*/

// solution

// var getLucky = function (s, k) {
//     let nums = "";

//     for (let i = 0; i < s.length; i++) {
//         nums += s.charCodeAt(i) - 96;
//     }

//     while (k > 0) {
//         nums = nums
//             .split("")
//             .reduce((s, v) => s + +v, 0)
//             .toString();
//         k--;
//     }
//     return +nums;
// };

var getLucky = function (s, k) {
    let nums = "";

    for (let i = 0; i < s.length; i++) {
        nums += s.charCodeAt(i) - 96;
    }
    const calc = (num) => {
        let sum = 0;
        for (let i = 0; i < num.length; i++) {
            sum += +num[i];
        }
        return sum.toString();
    };

    while (k > 0) {
        nums = calc(nums);
        k--;
    }
    return +nums;
};
