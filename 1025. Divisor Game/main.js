/*

Alice and Bob take turns playing a game, with Alice starting first.

Initially, there is a number n on the chalkboard. On each player's turn, that player makes a move consisting of:

Choosing any x with 0 < x < n and n % x == 0.
Replacing the number n on the chalkboard with n - x.
Also, if a player cannot make a move, they lose the game.

Return true if and only if Alice wins the game, assuming both players play optimally.

*/

// solution

var divisorGame = function (n) {
    const memo = new Array(n + 1).fill(null);

    const helper = (num) => {
        if (num === 1) {
            return false;
        }

        if (memo[num] !== null) {
            return memo[num];
        }

        for (let x = 1; x < num; x++) {
            if (num % x === 0) {
                if (!helper(num - x)) {
                    memo[num] = true;
                    return true;
                }
            }
        }

        memo[num] = false;
        return false;
    };

    return helper(n);
};
