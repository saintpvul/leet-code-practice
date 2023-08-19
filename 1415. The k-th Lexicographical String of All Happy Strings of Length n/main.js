/*

A happy string is a string that:

consists only of letters of the set ['a', 'b', 'c'].
s[i] != s[i + 1] for all values of i from 1 to s.length - 1 (string is 1-indexed).
For example, strings "abc", "ac", "b" and "abcbabcbcb" are all happy strings and strings "aa", "baa" and "ababbc" are not happy strings.

Given two integers n and k, consider a list of all happy strings of length n sorted in lexicographical order.

Return the kth string of this list or return an empty string if there are less than k happy strings of length n.

*/

// solution

var getHappyString = function (n, k) {
    const ch = ["a", "b", "c"];
    const res = [];

    const getHappyStr = (curr, l) => {
        if (l === n) {
            res.push(curr);
            return;
        }

        for (const char of ch) {
            if (curr === "" || curr[curr.length - 1] !== char) {
                getHappyStr(curr + char, l + 1);
            }
        }
    };
    getHappyStr("", 0);
    return k <= res.length ? res[k - 1] : "";
};
