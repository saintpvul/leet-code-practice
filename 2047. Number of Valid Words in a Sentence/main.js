/*

A sentence consists of lowercase letters ('a' to 'z'), digits ('0' to '9'), hyphens ('-'), punctuation marks ('!', '.', and ','), and spaces (' ') only. Each sentence can be broken down into one or more tokens separated by one or more spaces ' '.

A token is a valid word if all three of the following are true:

It only contains lowercase letters, hyphens, and/or punctuation (no digits).
There is at most one hyphen '-'. If present, it must be surrounded by lowercase characters ("a-b" is valid, but "-ab" and "ab-" are not valid).
There is at most one punctuation mark. If present, it must be at the end of the token ("ab,", "cd!", and "." are valid, but "a!b" and "c.," are not valid).
Examples of valid words include "a-b.", "afad", "ba-c", "a!", and "!".

Given a string sentence, return the number of valid words in sentence.

*/

// solution

var countValidWords = function (sentence) {
    let str = sentence.split(" ");
    let res = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== "" && isValid(str[i])) {
            res++;
        }
    }
    return res;
};

function isValid(s) {
    let h = 0,
        m = 0;
    let ch = s.split("");
    for (let i = 0; i < ch.length; i++) {
        if (/\d|\s/.test(ch[i])) {
            return false;
        }
        if (ch[i] == "-") {
            h++;
            if (h >= 2) return false;
            else if (
                i == 0 ||
                i == ch.length - 1 ||
                !/[a-zA-Z]/.test(ch[i - 1]) ||
                !/[a-zA-Z]/.test(ch[i + 1])
            )
                return false;
        }
        if (ch[i] == "!" || ch[i] == "." || ch[i] == ",") {
            m++;
            if (m >= 2) return false;
            if (i != ch.length - 1) return false;
        }
    }
    return true;
}
