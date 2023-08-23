/*

You are given an integer array matches where matches[i] = [winneri, loseri] indicates that the player winneri defeated player loseri in a match.

Return a list answer of size 2 where:

answer[0] is a list of all players that have not lost any matches.
answer[1] is a list of all players that have lost exactly one match.
The values in the two lists should be returned in increasing order.

Note:

You should only consider the players that have played at least one match.
The testcases will be generated such that no two matches will have the same outcome.

*/

// solution

var findWinners = function (matches) {
    const res = [[], []];
    const loses = new Map();

    for (const [winner, loser] of matches) {
        if (!loses.has(winner)) {
            loses.set(winner, 0);
        }
        if (!loses.has(loser)) {
            loses.set(loser, 0);
        }
        loses.set(loser, loses.get(loser) + 1);
    }

    loses.forEach((count, player) => {
        if (count < 2) {
            res[count].push(player);
        }
    });

    return [res[0].sort((a, b) => a - b), res[1].sort((a, b) => a - b)];
};
