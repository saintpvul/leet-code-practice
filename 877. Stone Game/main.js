/*

Alice and Bob play a game with piles of stones. There are an even number of piles arranged in a row, and each pile has a positive integer number of stones piles[i].

The objective of the game is to end with the most stones. The total number of stones across all the piles is odd, so there are no ties.

Alice and Bob take turns, with Alice starting first. Each turn, a player takes the entire pile of stones either from the beginning or from the end of the row. This continues until there are no more piles left, at which point the person with the most stones wins.

Assuming Alice and Bob play optimally, return true if Alice wins the game, or false if Bob wins.

*/

// solution

// too slow
// var stoneGame = function (piles) {
//     const n = piles.length;
//     const dp = new Array(n).fill(null).map(() => new Array(n).fill(0));

//     for (let i = 0; i < n; i++) {
//         dp[i][i] = piles[i];
//     }

//     for (let l = 2; l <= n; l++) {
//         for (let i = 0; i <= n - l; i++) {
//             const j = i + l - 1;
//             dp[i][j] = Math.max(
//                 piles[i] - dp[i + 1][j],
//                 piles[j] - dp[i][j - 1]
//             );
//         }
//     }
//     return dp[0][n - 1] > 0;
// };

// the problem in all cases requires true as result

var stoneGame = function (piles) {
    return true;
};
