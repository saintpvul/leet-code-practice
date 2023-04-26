/*

A sentence is a list of words that are separated by a single space with no leading or trailing spaces.

You are given an array of strings sentences, where each sentences[i] represents a single sentence.

Return the maximum number of words that appear in a single sentence.

*/

// solution

// var mostWordsFound = function (sentences) {
//     return Math.max(...sentences.map((e) => e.split(" ").length));
// };

var mostWordsFound = function (sentences) {
    let longest = 0;
    for (let i = 0; i < sentences.length; i++) {
        sentences[i] = sentences[i].split(" ");
        let current = 0;
        for (let j = 0; j < sentences[i].length; j++) {
            current++;
        }
        if (longest < current) {
            longest = current;
        }
    }
    return longest;
};
