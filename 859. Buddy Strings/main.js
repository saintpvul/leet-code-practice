/*

Given two strings s and goal, return true if you can swap two letters in s so the result is equal to goal, otherwise, return false.

Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at s[i] and s[j].

For example, swapping at indices 0 and 2 in "abcd" results in "cbad".

*/

// solution

var buddyStrings = function (s, goal) {
    if (s.length != goal.length) return false;

    if (s === goal) {
        const chars = new Set(s).size;
        return chars < s.length;
    }

    let indicies = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] != goal[i]) {
            indicies.push(i);
        }
    }
    if (indicies.length > 2) return false;

    return (
        s[indicies[0]] === goal[indicies[1]] &&
        s[indicies[1]] === goal[indicies[0]]
    );
};
