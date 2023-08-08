/*

Given a string s, partition the string into one or more substrings such that the characters in each substring are unique. That is, no letter appears in a single substring more than once.

Return the minimum number of substrings in such a partition.

Note that each character should belong to exactly one substring in a partition.

*/

// solution

var partitionString = function (s) {
    let count = 0;
    let i = 0;

    while (i < s.length) {
        const part = new Set();
        let j = i;

        while (j < s.length && !part.has(s[j])) {
            part.add(s[j]);
            j++;
        }

        count++;
        i = j;
    }

    return count;
};
