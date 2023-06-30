/*

Given an integer n, add a dot (".") as the thousands separator and return it in string format.

*/

// solution

var thousandSeparator = function (n) {
    return n.toLocaleString().replace(/[,]/gi, ".");
};
