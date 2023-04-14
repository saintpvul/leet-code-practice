/*

Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

*/

// solution

var letterCombinations = function (digits) {
    if (!digits) return [];
    let keyboard = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz",
    };
    if (digits.length === 1) return keyboard[digits].split("");

    let output = [];

    for (let i = 0; i < digits.length; i++) {
        let letters = keyboard[digits[i]];
        if (output.length === 0) {
            output = letters.split("");
        } else {
            let newOutput = [];
            for (let j = 0; j < output.length; j++) {
                for (let k = 0; k < letters.length; k++) {
                    newOutput.push(output[j] + letters[k]);
                }
            }
            output = newOutput;
        }
    }
    return output;
};
