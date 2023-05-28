/*

You are given a string s consisting only of uppercase English letters.

You can apply some operations to this string where, in one operation, you can remove any occurrence of one of the substrings "AB" or "CD" from s.

Return the minimum possible length of the resulting string that you can obtain.

Note that the string concatenates after removing the substring and could produce new "AB" or "CD" substrings.

*/

// solution

var minLength = function (s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (
            stack.length > 0 &&
            ((stack[stack.length - 1] === "A" && s[i] === "B") ||
                (stack[stack.length - 1] === "C" && s[i] === "D"))
        ) {
            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }
    return stack.length;
};
