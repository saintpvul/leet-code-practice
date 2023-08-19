/*

You are given a string s, which contains stars *.

In one operation, you can:

Choose a star in s.
Remove the closest non-star character to its left, as well as remove the star itself.
Return the string after all stars have been removed.

Note:

The input will be generated such that the operation is always possible.
It can be shown that the resulting string will always be unique.

*/

// solution

// too slow
// var removeStars = function (s) {
//     for (let i = 0; i < s.length; i++) {
//         if (s[i + 1] === "*") {
//             s = s.slice(0, i) + s.slice(i + 2);
//             i -= 2;
//         }
//     }
//     return s;
// };

var removeStars = function (s) {
    let res = "";
    let count = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === "*") {
            count++;
        } else if (count > 0) {
            count--;
        } else {
            res = s[i] + res;
        }
    }

    return res;
};
