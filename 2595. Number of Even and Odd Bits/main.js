/*

You are given a positive integer n.

Let even denote the number of even indices in the binary representation of n (0-indexed) with value 1.

Let odd denote the number of odd indices in the binary representation of n (0-indexed) with value 1.

Return an integer array answer where answer = [even, odd].

*/

// solution

// var evenOddBit = function (n) {
//     let even = 0;
//     let odd = 0;
//     n = n.toString(2).split("").reverse();
//     console.log(n);
//     for (let i = 0; i < n.length; i++) {
//         if (n[i] === "1") {
//             if (i % 2 === 0) {
//                 even++;
//             } else {
//                 odd++;
//             }
//         }
//     }
//     return [even, odd];
// };

var evenOddBit = function (n) {
    let even = 0;
    let odd = 0;
    let i = 0;
    while (n) {
        if (n & 1) {
            if (i % 2 === 0) {
                even++;
            } else {
                odd++;
            }
        }
        n >>>= 1;
        i++;
    }
    return [even, odd];
};
