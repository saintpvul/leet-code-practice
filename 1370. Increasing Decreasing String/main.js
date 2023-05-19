/*

You are given a string s. Reorder the string using the following algorithm:

Pick the smallest character from s and append it to the result.
Pick the smallest character from s which is greater than the last appended character to the result and append it.
Repeat step 2 until you cannot pick more characters.
Pick the largest character from s and append it to the result.
Pick the largest character from s which is smaller than the last appended character to the result and append it.
Repeat step 5 until you cannot pick more characters.
Repeat the steps from 1 to 6 until you pick all characters from s.
In each step, If the smallest or the largest character appears more than once you can choose any occurrence and append it to the result.

Return the result string after sorting s with this algorithm.

*/

// solution

var sortString = function (s) {
    const charCount = new Map();

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        charCount.set(char, charCount.get(char) + 1 || 1);
    }

    let result = "";
    let remainingChars = s.length;

    while (remainingChars > 0) {
        for (let char of [...charCount.keys()].sort()) {
            if (charCount.get(char) > 0) {
                result += char;
                charCount.set(char, charCount.get(char) - 1);
                remainingChars--;
            }
        }

        for (let char of [...charCount.keys()].sort().reverse()) {
            if (charCount.get(char) > 0) {
                result += char;
                charCount.set(char, charCount.get(char) - 1);
                remainingChars--;
            }
        }
    }

    return result;
};
