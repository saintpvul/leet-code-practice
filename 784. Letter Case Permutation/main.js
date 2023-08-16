/*

Given a string s, you can transform every letter individually to be lowercase or uppercase to create another string.

Return a list of all possible strings we could create. Return the output in any order.

*/

// solution

var letterCasePermutation = function (s) {
    const result = [];

    function backtrack(current, index) {
        if (current.length === s.length) {
            result.push(current);
            return;
        }

        const char = s[index];
        if (/[a-zA-Z]/.test(char)) {
            backtrack(current + char.toLowerCase(), index + 1);
            backtrack(current + char.toUpperCase(), index + 1);
        } else {
            backtrack(current + char, index + 1);
        }
    }

    backtrack("", 0);
    return result;
};
