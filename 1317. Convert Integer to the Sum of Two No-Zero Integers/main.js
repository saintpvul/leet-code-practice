/*

No-Zero integer is a positive integer that does not contain any 0 in its decimal representation.

Given an integer n, return a list of two integers [a, b] where:

a and b are No-Zero integers.
a + b = n
The test cases are generated so that there is at least one valid solution. If there are many valid solutions, you can return any of them.

*/

// solution

var getNoZeroIntegers = function (n) {
    for (let i = 1; i < n; i++) {
        const a = i;
        const b = n - i;
        if (hasZero(a) && hasZero(b)) {
            return [a, b];
        }
    }
};

function hasZero(num) {
    return !num.toString().includes("0");
}
