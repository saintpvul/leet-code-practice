/*

You are given a string number representing a positive integer and a character digit.

Return the resulting string after removing exactly one occurrence of digit from number such that the value of the resulting string in decimal form is maximized. The test cases are generated such that digit occurs at least once in number.

*/

// solution

var removeDigit = function (number, digit) {
    let maxResult = "";
    for (let i = 0; i < number.length; i++) {
        if (number[i] === digit) {
            let newNumber = number.slice(0, i) + number.slice(i + 1);
            if (newNumber > maxResult) {
                maxResult = newNumber;
            }
        }
    }
    return maxResult;
};
