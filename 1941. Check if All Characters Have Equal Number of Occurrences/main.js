/*

Given a string s, return true if s is a good string, or false otherwise.

A string s is good if all the characters that appear in s have the same number of occurrences (i.e., the same frequency).

*/

// solution

// var areOccurrencesEqual = function (s) {
//     let map = new Map();

//     for (let i = 0; i < s.length; i++) {
//         if (map.has(s[i])) {
//             map.set(s[i], map.get(s[i]) + 1);
//         } else {
//             map.set(s[i], 1);
//         }
//     }
//     const values = Array.from(map.values());
//     const firstValue = values[0];

//     for (let i = 0; i < values.length; i++) {
//         if (values[i] !== firstValue) {
//             return false;
//         }
//     }
//     return true;
// };

var areOccurrencesEqual = function (s) {
    let map = new Map();

    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            map.set(s[i], map.get(s[i]) + 1);
        } else {
            map.set(s[i], 1);
        }
    }
    const expectedValue = map.values().next().value;

    for (const value of map.values()) {
        if (value !== expectedValue) {
            return false;
        }
    }

    return true;
};
