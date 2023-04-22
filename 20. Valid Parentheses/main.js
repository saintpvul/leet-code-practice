/*

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

*/

// solution

var isValid = function (s) {
    s = s.split("");
    let par = [];
    for (let p of s) {
        if (p === "(" || p === "[" || p === "{") {
            par.push(p);
        } else {
            if (!par.length) return false;
            let last = par[par.length - 1];
            if (p === ")" && last === "(") {
                par.pop();
            } else if (p === "]" && last === "[") {
                par.pop();
            } else if (p === "}" && last === "{") {
                par.pop();
            } else {
                break;
            }
        }
    }
    return par.length === 0;
};
