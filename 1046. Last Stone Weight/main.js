/*

You are given an array of integers stones where stones[i] is the weight of the ith stone.

We are playing a game with the stones. On each turn, we choose the heaviest two stones and smash them together. Suppose the heaviest two stones have weights x and y with x <= y. The result of this smash is:

If x == y, both stones are destroyed, and
If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.
At the end of the game, there is at most one stone left.

Return the weight of the last remaining stone. If there are no stones left, return 0.

*/

// solution

var lastStoneWeight = function (stones) {
    while (stones.length > 1) {
        stones = stones.sort((a, b) => b - a);
        let y = stones[0];
        let x = stones[1];

        if (x === y) {
            stones.splice(0, 2);
        } else if (x !== y) {
            stones.splice(0, 2);
            stones.push(y - x);
        }
    }
    return stones.length === 1 ? stones[0] : 0;
};
