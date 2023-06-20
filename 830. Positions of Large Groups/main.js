/*

In a string s of lowercase letters, these letters form consecutive groups of the same character.

For example, a string like s = "abbxxxxzyy" has the groups "a", "bb", "xxxx", "z", and "yy".

A group is identified by an interval [start, end], where start and end denote the start and end indices (inclusive) of the group. In the above example, "xxxx" has the interval [3,6].

A group is considered large if it has 3 or more characters.

Return the intervals of every large group sorted in increasing order by start index.

*/

// solution

var largeGroupPositions = function (s) {
    let largeGroups = [];
    let count = 1;

    for (let i = 0; i < s.length; i++) {
        if (i === s.length - 1 || s[i] !== s[i + 1]) {
            if (count >= 3) {
                largeGroups.push([i - count + 1, i]);
            }
            count = 1;
        } else {
            count++;
        }
    }

    return largeGroups;
};
