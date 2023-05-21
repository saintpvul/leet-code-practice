/*

A string s is nice if, for every letter of the alphabet that s contains, it appears both in uppercase and lowercase. For example, "abABB" is nice because 'A' and 'a' appear, and 'B' and 'b' appear. However, "abA" is not because 'b' appears, but 'B' does not.

Given a string s, return the longest substring of s that is nice. If there are multiple, return the substring of the earliest occurrence. If there are none, return an empty string.

*/

// solution

var longestNiceSubstring = function (s) {
    let longestNice = "";

    const isNice = (charSet) => {
        for (char of charSet) {
            if (
                !charSet.has(char.toLowerCase()) ||
                !charSet.has(char.toUpperCase())
            ) {
                return false;
            }
        }
        return true;
    };

    for (let i = 0; i < s.length; i++) {
        const charSet = new Set();
        for (let j = i; j < s.length; j++) {
            const char = s[j];

            charSet.add(char);

            if (isNice(charSet)) {
                const substring = s.substring(i, j + 1);
                if (substring.length > longestNice.length) {
                    longestNice = substring;
                }
            }
        }
    }

    return longestNice;
};
Console;
