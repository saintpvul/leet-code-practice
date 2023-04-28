/*

Given two string arrays words1 and words2, return the number of strings that appear exactly once in each of the two arrays.

*/

// solution

var countWords = function (words1, words2) {
    let count = 0;
    let wordsCount = {};
    for (let word of words1) {
        wordsCount[word] = (wordsCount[word] || 0) + 1;
    }
    for (let word of words2) {
        wordsCount[word] = (wordsCount[word] || 0) + 1;
    }
    for (let word in wordsCount) {
        if (
            wordsCount[word] === 2 &&
            words1.includes(word) &&
            words2.includes(word)
        ) {
            count++;
        }
    }
    return count;
};
