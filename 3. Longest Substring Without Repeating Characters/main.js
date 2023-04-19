/*

Given a string s, find the length of the longest 
substring
 without repeating characters.

*/

// solution

var lengthOfLongestSubstring = function (s) {
    let end = 0;
    let start = 0;
    let maxLen = 0;
    let chars = new Set();
    while (end < s.length) {
        if (!chars.has(s[end])) {
            chars.add(s[end]);
            end++;
            maxLen = Math.max(maxLen, end - start);
        } else {
            chars.delete(s[start]);
            start++;
        }
    }
    return maxLen;
};
