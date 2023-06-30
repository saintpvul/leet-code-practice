/*

Given a string s of lower and upper case English letters.

A good string is a string which doesn't have two adjacent characters s[i] and s[i + 1] where:

0 <= i <= s.length - 2
s[i] is a lower-case letter and s[i + 1] is the same letter but in upper-case or vice-versa.
To make the string good, you can choose two adjacent characters that make the string bad and remove them. You can keep doing this until the string becomes good.

Return the string after making it good. The answer is guaranteed to be unique under the given constraints.

Notice that an empty string is also good.

*/

// solution

var makeGood = function (s) {
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (stack.length > 0 && isBadPair(stack[stack.length - 1], char)) {
            stack.pop();
        } else {
            stack.push(char);
        }
    }

    return stack.join("");
};

function isBadPair(char1, char2) {
    return char1 !== char2 && char1.toLowerCase() === char2.toLowerCase();
}
