/*

Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

*/

// solution

// var wordPattern = function (pattern, s) {
//     const words = s.split(" ");

//     if (pattern.length !== words.length) {
//         return false;
//     }

//     const map = new Map();

//     for (let i = 0; i < pattern.length; i++) {
//         const char = pattern[i];
//         const word = words[i];

//         if (!map.has(char)) {
//             if ([...map.values()].includes(word)) {
//                 return false;
//             }
//             map.set(char, word);
//         } else if (map.get(char) !== word) {
//             return false;
//         }
//     }

//     return true;
// };

// faster

var wordPattern = function (pattern, s) {
    const words = s.split(" ");

    if (pattern.length !== words.length) {
        return false;
    }

    const map = new Map();
    const seenWords = new Set();

    for (let i = 0; i < pattern.length; i++) {
        const char = pattern[i];
        const word = words[i];

        if (!map.has(char)) {
            if (seenWords.has(word)) {
                return false;
            }
            map.set(char, word);
            seenWords.add(word);
        } else {
            if (map.get(char) !== word) {
                return false;
            }
        }
    }

    return true;
};
