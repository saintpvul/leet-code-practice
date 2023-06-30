/*

Given a string s containing only lowercase English letters and the '?' character, convert all the '?' characters into lowercase letters such that the final string does not contain any consecutive repeating characters. You cannot modify the non '?' characters.

It is guaranteed that there are no consecutive repeating characters in the given string except for '?'.

Return the final string after all the conversions (possibly zero) have been made. If there is more than one solution, return any of them. It can be shown that an answer is always possible with the given constraints.

*/

// solution

var modifyString = function (s) {
    const n = s.length;
    let result = "";

    for (let i = 0; i < n; i++) {
        if (s[i] === "?") {
            let code = 97; // ASCII code for 'a'

            // Check if the previous character is equal to the current ASCII character
            if (i > 0 && result[i - 1].charCodeAt(0) === code) {
                code++;
            }

            // Check if the next character is equal to the current ASCII character
            if (i < n - 1 && s[i + 1] === String.fromCharCode(code)) {
                code++;
            }

            // Check if the code conflicts with the previous character
            if (i > 0 && code === result[i - 1].charCodeAt(0)) {
                code++;
            }

            result += String.fromCharCode(code);
        } else {
            result += s[i];
        }
    }

    return result;
};
