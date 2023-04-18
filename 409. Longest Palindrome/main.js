/*

Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

*/

// solution

var longestPalindrome = function (s) {
    let letters = new Map();
    for (let letter of s) {
        letters.set(letter, (letters.get(letter) || 0) + 1);
    }
    let l = 0;
    let hasOdd = false;
    for (let count of letters.values()) {
        if (!(count % 2)) {
            l += count;
        } else {
            l += count - 1;
            hasOdd = true;
        }
    }
    if (hasOdd) {
        l++;
    }
    return l;
};
