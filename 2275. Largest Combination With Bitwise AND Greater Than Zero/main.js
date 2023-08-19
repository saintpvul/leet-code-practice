/*

The bitwise AND of an array nums is the bitwise AND of all integers in nums.

For example, for nums = [1, 5, 3], the bitwise AND is equal to 1 & 5 & 3 = 1.
Also, for nums = [7], the bitwise AND is 7.
You are given an array of positive integers candidates. Evaluate the bitwise AND of every combination of numbers of candidates. Each number in candidates may only be used once in each combination.

Return the size of the largest combination of candidates with a bitwise AND greater than 0.

*/

// solution

// too slow
// var largestCombination = function (candidates) {
//     let maxCount = 0;

//     for (let i = 0; i < 24; i++) {
//         let count = candidates.reduce((s, c) => s + ((c >> i) & 1), 0);
//         maxCount = Math.max(maxCount, count);
//     }

//     return maxCount;
// };

// without reduce
var largestCombination = function (candidates) {
    const max = 24;
    let maxCount = 0;

    for (let i = 0; i < max; i++) {
        let count = 0;

        for (const candidate of candidates) {
            if (((candidate >> i) & 1) === 1) {
                count++;
            }
        }
        maxCount = Math.max(maxCount, count);
    }

    return maxCount;
};
