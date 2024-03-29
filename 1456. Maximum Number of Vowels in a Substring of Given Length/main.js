/*

Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

*/

// solution

var maxVowels = function (s, k) {
    let count = 0;
    let maxCount = 0;
    const vowels = new Set(["a", "e", "i", "o", "u"]);

    for (let i = 0; i < s.length; i++) {
        if (i >= k && vowels.has(s[i - k])) {
            count--;
        }
        if (vowels.has(s[i])) {
            count++;
        }
        maxCount = Math.max(maxCount, count);
    }

    return maxCount;
};
