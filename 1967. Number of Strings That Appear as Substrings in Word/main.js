/*

Given an array of strings patterns and a string word, return the number of strings in patterns that exist as a substring in word.

A substring is a contiguous sequence of characters within a string.

*/

// solution

// var numOfStrings = function (patterns, word) {
//     return patterns.reduce(
//         (count, element) =>
//             word.includes(element) ? (count += 1) : (count += 0),
//         0
//     );
// };

var numOfStrings = function (patterns, word) {
    let count = 0;
    for (let i = 0; i < patterns.length; i++) {
        const pattern = patterns[i];
        if (word.includes(pattern)) count++;
    }
    return count;
};
