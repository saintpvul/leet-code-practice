/*

Given a string paragraph and a string array of the banned words banned, return the most frequent word that is not banned. It is guaranteed there is at least one word that is not banned, and that the answer is unique.

The words in paragraph are case-insensitive and the answer should be returned in lowercase.

*/

// solution

var mostCommonWord = function (paragraph, banned) {
    const frequency = new Map();

    paragraph = paragraph
        .toLowerCase()
        .replace(/[^\w\s]/g, " ")
        .split(" ");

    for (const word of paragraph) {
        if (!banned.includes(word) && word !== "") {
            frequency.set(word, (frequency.get(word) || 0) + 1);
        }
    }
    let max = -1;
    let common = "";
    for (const [word, count] of frequency.entries()) {
        if (count > max) {
            max = count;
            common = word;
        }
    }
    return common;
};
