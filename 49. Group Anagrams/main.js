/*

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

*/

// solution

var groupAnagrams = function (strs) {
    let map = {};
    for (let i = 0; i < strs.length; i++) {
        const currentLetters = strs[i].split("").sort().join("");
        map[currentLetters]
            ? map[currentLetters].push(strs[i])
            : (map[currentLetters] = [strs[i]]);
    }
    return Object.values(map);
};
