/*

You are given an integer array score of size n, where score[i] is the score of the ith athlete in a competition. All the scores are guaranteed to be unique.

The athletes are placed based on their scores, where the 1st place athlete has the highest score, the 2nd place athlete has the 2nd highest score, and so on. The placement of each athlete determines their rank:

The 1st place athlete's rank is "Gold Medal".
The 2nd place athlete's rank is "Silver Medal".
The 3rd place athlete's rank is "Bronze Medal".
For the 4th place to the nth place athlete, their rank is their placement number (i.e., the xth place athlete's rank is "x").
Return an array answer of size n where answer[i] is the rank of the ith athlete.

*/

// solution

// var findRelativeRanks = function (score) {
//     const sort = [...score].sort((a, b) => b - a);
//     const medals = ["Gold Medal", "Silver Medal", "Bronze Medal"];

//     let res = [];

//     for (let i = 0; i < score.length; i++) {
//         let idx = sort.indexOf(score[i]);
//         if (idx < 3) {
//             res.push(medals[idx]);
//         } else {
//             res.push("" + (idx + 1));
//         }
//     }
//     return res;
// };

// bit faster using hash table

var findRelativeRanks = function (score) {
    let sort = [...score].sort((a, b) => b - a);

    let rank = {};
    for (let i = 0; i < sort.length; i++) {
        rank[sort[i]] = i + 1;
    }

    let medals = ["Gold Medal", "Silver Medal", "Bronze Medal"];

    for (let i = 0; i < score.length; i++) {
        if (rank[score[i]] <= 3) {
            score[i] = medals[rank[score[i]] - 1];
        } else {
            score[i] = "" + rank[score[i]];
        }
    }
    return score;
};
