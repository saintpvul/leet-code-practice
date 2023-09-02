/*

Your laptop keyboard is faulty, and whenever you type a character 'i' on it, it reverses the string that you have written. Typing other characters works as expected.

You are given a 0-indexed string s, and you type each character of s using your faulty keyboard.

Return the final string that will be present on your laptop screen.

*/

// solution

var finalString = function (s) {
    let res = [];
    let isRev = false;

    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (c === "i") {
            isRev = !isRev;
        } else if (isRev) {
            res.unshift(c);
        } else {
            res.push(c);
        }
    }

    return isRev ? res.reverse().join("") : res.join("");
};
