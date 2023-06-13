/*

You are given an integer array gifts denoting the number of gifts in various piles. Every second, you do the following:

Choose the pile with the maximum number of gifts.
If there is more than one pile with the maximum number of gifts, choose any.
Leave behind the floor of the square root of the number of gifts in the pile. Take the rest of the gifts.
Return the number of gifts remaining after k seconds.

*/

// solution

var pickGifts = function (gifts, k) {
    while (k) {
        let max = Math.max(...gifts);
        let idx = gifts.indexOf(max);
        let sqrt = Math.floor(Math.sqrt(max));
        gifts[idx] = sqrt;
        k--;
    }
    return gifts.reduce((s, v) => s + v, 0);
};
