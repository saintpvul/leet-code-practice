/*

Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

*/

// solution

var reverseWords = function (s) {
    s = s.split(" ");
    for (let i = 0; i < s.length; i++) {
        s[i] = s[i].split("").reverse().join("");
    }
    return s.join(" ");
};
