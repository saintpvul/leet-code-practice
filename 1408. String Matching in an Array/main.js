/*

Given an array of string words, return all strings in words that is a substring of another word. You can return the answer in any order.

A substring is a contiguous sequence of characters within a string

*/

// solution

var stringMatching = function (words) {
    let sub = new Set();
    for (let i = 0; i < words.length; i++) {
        let currentSub = words[i];
        for (let j = 0; j < words.length; j++) {
            if (currentSub != words[j] && words[j].includes(currentSub)) {
                sub.add(currentSub);
            }
        }
    }
    return Array.from(sub);
};
