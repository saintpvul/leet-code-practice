/*

You are given a 0-indexed string s consisting of only lowercase English letters, where each letter in s appears exactly twice. You are also given a 0-indexed integer array distance of length 26.

Each letter in the alphabet is numbered from 0 to 25 (i.e. 'a' -> 0, 'b' -> 1, 'c' -> 2, ... , 'z' -> 25).

In a well-spaced string, the number of letters between the two occurrences of the ith letter is distance[i]. If the ith letter does not appear in s, then distance[i] can be ignored.

Return true if s is a well-spaced string, otherwise return false.

*/

// solution

var checkDistances = function (s, distance) {
    let alph = "abcdefghijklmnopqrstuvwxyz";
    let p = [];
    for (let i = 0; i <= s.length; i++) {
        let pos = alph.indexOf(s[i]);
        if (pos !== -1) {
            distance[pos] =
                distance[pos] - (s.lastIndexOf(s[i]) - s.indexOf(s[i]) - 1);
            s = s.replaceAll(s[i], "-");
            p.push(pos);
        }
    }
    let res = true;
    for (let i = 0; i < p.length; i++) {
        if (distance[p[i]] !== 0) {
            res = false;
        }
    }
    return res;
};
