/*

You are given a string s, where every two consecutive vertical bars '|' are grouped into a pair. In other words, the 1st and 2nd '|' make a pair, the 3rd and 4th '|' make a pair, and so forth.

Return the number of '*' in s, excluding the '*' between each pair of '|'.

Note that each '|' will belong to exactly one pair.

*/

// solution

const countAsterisks = function (s) {
    const modifiedString = s.replace(/\|.*?\|/g, "");
    const count = modifiedString.split("*").length - 1;
    return count;
};
