/*

You are given a 0-indexed string array words.

Two strings are similar if they consist of the same characters.

For example, "abca" and "cba" are similar since both consist of characters 'a', 'b', and 'c'.
However, "abacba" and "bcfd" are not similar since they do not consist of the same characters.
Return the number of pairs (i, j) such that 0 <= i < j <= word.length - 1 and the two strings words[i] and words[j] are similar.

*/

// solution

var similarPairs = function (words) {
    let count = 0;
    for (let i = 0; i < words.length - 1; i++) {
        let currentWord = words[i].split("").sort();
        for (let j = i + 1; j < words.length; j++) {
            let nextWord = words[j].split("").sort();
            if (
                Array.from(new Set(currentWord)).join("") ===
                Array.from(new Set(nextWord)).join("")
            ) {
                count++;
            }
        }
    }
    return count;
};

// most slowest solution
