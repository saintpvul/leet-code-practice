/*

You are given a 0-indexed string blocks of length n, where blocks[i] is either 'W' or 'B', representing the color of the ith block. The characters 'W' and 'B' denote the colors white and black, respectively.

You are also given an integer k, which is the desired number of consecutive black blocks.

In one operation, you can recolor a white block such that it becomes a black block.

Return the minimum number of operations needed such that there is at least one occurrence of k consecutive black blocks.

*/

// solution

var minimumRecolors = function (blocks, k) {
    let countB = 0;
    let maxCountB = 0;

    for (let i = 0; i < blocks.length; ++i) {
        if (blocks[i] === "B") ++countB;
        if (i >= k && blocks[i - k] === "B") --countB;
        maxCountB = Math.max(maxCountB, countB);
    }

    return k - maxCountB;
};
