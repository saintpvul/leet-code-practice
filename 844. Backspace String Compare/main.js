/*

Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

*/

// solution

var backspaceCompare = function (s, t) {
    const stacked = (str) => {
        let stack = [];
        for (let i = 0; i < str.length; i++) {
            if (str[i] === "#") {
                stack.pop();
            } else {
                stack.push(str[i]);
            }
        }
        return stack.join("");
    };

    const stackedS = stacked(s);
    const stackedT = stacked(t);

    return stackedS === stackedT;
};
