/*

You are given an array of equal-length strings words. Assume that the length of each string is n.

Each string words[i] can be converted into a difference integer array difference[i] of length n - 1 where difference[i][j] = words[i][j+1] - words[i][j] where 0 <= j <= n - 2. Note that the difference between two letters is the difference between their positions in the alphabet i.e. the position of 'a' is 0, 'b' is 1, and 'z' is 25.

For example, for the string "acb", the difference integer array is [2 - 0, 1 - 2] = [2, -1].
All the strings in words have the same difference integer array, except one. You should find that string.

Return the string in words that has different difference integer array.

*/

// solution

var oddString = function (words) {
    let diffs = {};
    for (let i = 0; i < words.length; i++) {
        let diff = [];
        for (let j = 0; j < words[i].length - 1; j++) {
            diff.push(
                words[i].charCodeAt(j + 1) - 97 - (words[i].charCodeAt(j) - 97)
            );
        }
        diffs[diff] ? diffs[diff]++ : (diffs[diff] = 1);
    }

    for (const word of words) {
        let diff = [];
        for (let j = 0; j < word.length - 1; j++) {
            diff.push(word.charCodeAt(j + 1) - 97 - (word.charCodeAt(j) - 97));
        }
        if (diffs[diff] === 1) {
            return word;
        }
    }

    return null;
};
