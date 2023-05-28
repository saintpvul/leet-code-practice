/*

Given a string s consisting of only the characters 'a' and 'b', return true if every 'a' appears before every 'b' in the string. Otherwise, return false.

*/

// solution

// var checkString = function (s) {
//     const a = s.lastIndexOf("a");
//     const b = s.indexOf("b");
//     if (a >= 0 && b < 0) {
//         return true;
//     }
//     return a < b;
// };

var checkString = function (s) {
    let appears = false;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "b") {
            appears = true;
        }
        if (s[i] === "a" && appears) {
            return false;
        }
    }
    return true;
};
