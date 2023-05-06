/*

You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.

*/

// solution

var mergeAlternately = function (word1, word2) {
    let big = word1.length > word2.length ? word1 : word2;
    let small = big === word1 ? word2 : word1;

    let res = "";

    for (let i = 0; i < small.length; i++) {
        res += word1[i];
        res += word2[i];
    }
    return (res += big.slice(small.length));
};
