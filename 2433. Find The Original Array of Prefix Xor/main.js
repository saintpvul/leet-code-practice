/*

You are given an integer array pref of size n. Find and return the array arr of size n that satisfies:

pref[i] = arr[0] ^ arr[1] ^ ... ^ arr[i].
Note that ^ denotes the bitwise-xor operation.

It can be proven that the answer is unique.

*/

// solution

var findArray = function (pref) {
    let res = [];
    for (let i = 0; i < pref.length; i++) {
        if (i === 0) {
            res.push(pref[i]);
        } else {
            res.push(pref[i] ^ pref[i - 1]);
        }
    }
    return res;
};
