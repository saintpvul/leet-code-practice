/*

Given a string s, return the length of the longest substring between two equal characters, excluding the two characters. If there is no such substring return -1.

A substring is a contiguous sequence of characters within a string.

*/

// solution

var maxLengthBetweenEqualCharacters = function (s) {
    let maxLength = -1;
    const charMap = {};

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (charMap.hasOwnProperty(char)) {
            maxLength = Math.max(maxLength, i - charMap[char] - 1);
        } else {
            charMap[char] = i;
        }
    }

    return maxLength;
};
