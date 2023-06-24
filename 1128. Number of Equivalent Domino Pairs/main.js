/*

Given a list of dominoes, dominoes[i] = [a, b] is equivalent to dominoes[j] = [c, d] if and only if either (a == c and b == d), or (a == d and b == c) - that is, one domino can be rotated to be equal to another domino.

Return the number of pairs (i, j) for which 0 <= i < j < dominoes.length, and dominoes[i] is equivalent to dominoes[j].

*/

// solution

// too slow
// var numEquivDominoPairs = function (dominoes) {
//     let pairs = 0;
//     for (let i = 0; i < dominoes.length - 1; i++) {
//         let [a, b] = dominoes[i];
//         for (let j = i + 1; j < dominoes.length; j++) {
//             let [c, d] = dominoes[j];
//             if ((a === c && b === d) || (a === d && b === c)) {
//                 pairs++;
//             }
//         }
//     }
//     return pairs;
// };

//using hash table
var numEquivDominoPairs = function (dominoes) {
    const countMap = new Map();
    let pairs = 0;

    for (const domino of dominoes) {
        const key =
            domino[0] < domino[1]
                ? `${domino[0]}-${domino[1]}`
                : `${domino[1]}-${domino[0]}`;
        const count = countMap.get(key) || 0;

        pairs += count;
        countMap.set(key, count + 1);
    }

    return pairs;
};
