/*

You are given two 0-indexed strings s and target. You can take some letters from s and rearrange them to form new strings.

Return the maximum number of copies of target that can be formed by taking letters from s and rearranging them.

*/

// solution

// the slowest one
// var rearrangeCharacters = function (s, target) {
//     let targetLetters = new Map();

//     for (let letter of target) {
//         targetLetters.set(letter, (targetLetters.get(letter) || 0) + 1);
//     }

//     let count = Infinity;

//     for (let letter of targetLetters.keys()) {
//         let letterCount = 0;
//         for (let i = 0; i < s.length; i++) {
//             if (s[i] === letter) {
//                 letterCount++;
//             }
//         }
//         let targetLetterCount = targetLetters.get(letter);
//         let copies = Math.floor(letterCount / targetLetterCount);
//         count = Math.min(count, copies);
//     }

//     return count !== Infinity ? count : 0;
// };

var rearrangeCharacters = function (s, target) {
    let sFreq = new Array(26).fill(0);
    let targetFreq = new Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        sFreq[s.charCodeAt(i) - "a".charCodeAt(0)]++;
    }

    for (let i = 0; i < target.length; i++) {
        targetFreq[target.charCodeAt(i) - "a".charCodeAt(0)]++;
    }

    let copiesCount = Infinity;

    for (let i = 0; i < 26; i++) {
        if (targetFreq[i] > 0) {
            copiesCount = Math.min(
                copiesCount,
                Math.floor(sFreq[i] / targetFreq[i])
            );
        }
    }

    return copiesCount;
};
