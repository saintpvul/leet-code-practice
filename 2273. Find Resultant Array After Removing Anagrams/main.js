/*

You are given a 0-indexed string array words, where words[i] consists of lowercase English letters.

In one operation, select any index i such that 0 < i < words.length and words[i - 1] and words[i] are anagrams, and delete words[i] from words. Keep performing this operation as long as you can select an index that satisfies the conditions.

Return words after performing all operations. It can be shown that selecting the indices for each operation in any arbitrary order will lead to the same result.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase using all the original letters exactly once. For example, "dacb" is an anagram of "abdc".

*/

// solution

var removeAnagrams = function (words) {
    let res = [];

    const isAnagram = (a, b) => {
        const count = new Map();
        for (let char of a) {
            count.set(char, (count.get(char) || 0) + 1);
        }
        for (let char of b) {
            count.set(char, (count.get(char) || 0) - 1);
        }
        for (let value of count.values()) {
            if (value !== 0) {
                return false;
            }
        }
        return true;
    };

    let i = 0;
    while (i < words.length) {
        let j = i + 1;
        while (j < words.length && isAnagram(words[i], words[j])) {
            j += 1;
        }
        res.push(words[i]);
        i = j;
    }

    return res;
};
