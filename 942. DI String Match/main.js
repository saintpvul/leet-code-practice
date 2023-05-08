/*

A permutation perm of n + 1 integers of all the integers in the range [0, n] can be represented as a string s of length n where:

s[i] == 'I' if perm[i] < perm[i + 1], and
s[i] == 'D' if perm[i] > perm[i + 1].
Given a string s, reconstruct the permutation perm and return it. If there are multiple valid permutations perm, return any of them.

*/

// solution

var diStringMatch = function (s) {
    let n = s.length;
    let perm = Array(n + 1).fill(0);

    const reverse = (arr, start, end) => {
        while (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }
    };

    for (let i = 0; i <= n; i++) {
        perm[i] = i;
    }

    for (let i = 0; i < n; i++) {
        if (s[i] === "D") {
            let j = i;
            while (i < n && s[i] === "D") {
                i++;
            }
            reverse(perm, j, i);
        }
    }

    return perm;
};
