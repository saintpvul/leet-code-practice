/*

Given a string s, return the number of segments in the string.

A segment is defined to be a contiguous sequence of non-space characters.

*/

// solution

// var countSegments = function (s) {
//     s = s.split(" ");
//     let count = 0;
//     for (let i = 0; i < s.length; i++) {
//         if (/^[^\s]/.test(s[i])) {
//             count++;
//         }
//     }
//     return count;
// };

var countSegments = function (s) {
    s = s.split(" ");

    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "") {
            continue;
        } else {
            count++;
        }
    }
    return count;
};
