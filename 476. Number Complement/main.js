/*

The complement of an integer is the integer you get when you flip all the 0's to 1's and all the 1's to 0's in its binary representation.

For example, The integer 5 is "101" in binary and its complement is "010" which is the integer 2.
Given an integer num, return its complement.

*/

// solution

var findComplement = function (num) {
    num = num.toString(2);
    let nextNum = "";
    for (let i = 0; i < num.length; i++) {
        if (num[i] === "1") {
            nextNum += 0;
        } else {
            nextNum += 1;
        }
    }
    return parseInt(nextNum, 2);
};
