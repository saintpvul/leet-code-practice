/*

Given a string of English letters s, return the greatest English letter which occurs as both a lowercase and uppercase letter in s. The returned letter should be in uppercase. If no such letter exists, return an empty string.

An English letter b is greater than another letter a if b appears after a in the English alphabet.

*/

// solution

var greatestLetter = function (s) {
    let map = new Map();

    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        if (!map.has(char)) {
            map.set(char, true);
        }
    }

    for (let i = 25; i >= 0; i--) {
        let ch1 = String.fromCharCode(97 + i);
        let ch2 = String.fromCharCode(65 + i);

        if (map.has(ch1) && map.has(ch2)) {
            return ch2;
        }
    }

    return "";
};
