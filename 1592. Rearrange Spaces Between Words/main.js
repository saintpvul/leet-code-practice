/*

You are given a string text of words that are placed among some number of spaces. Each word consists of one or more lowercase English letters and are separated by at least one space. It's guaranteed that text contains at least one word.

Rearrange the spaces so that there is an equal number of spaces between every pair of adjacent words and that number is maximized. If you cannot redistribute all the spaces equally, place the extra spaces at the end, meaning the returned string should be the same length as text.

Return the string after rearranging the spaces.

*/

// solution

var reorderSpaces = function (text) {
    const spaces = (text.match(/ /g) || []).length;
    const words = text.trim().split(/\s+/);

    if (words.length === 1) return words[0] + " ".repeat(spaces);

    const gapSize = Math.floor(spaces / (words.length - 1));
    const remains = spaces % (words.length - 1);

    let res = "";
    for (let i = 0; i < words.length - 1; ++i)
        res += words[i] + " ".repeat(gapSize);
    res += words[words.length - 1] + " ".repeat(remains);

    return res;
};
