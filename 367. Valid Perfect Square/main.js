/*

Given a positive integer num, return true if num is a perfect square or false otherwise.

A perfect square is an integer that is the square of an integer. In other words, it is the product of some integer with itself.

You must not use any built-in library function, such as sqrt.

*/

// solution

// banned but also works

/*
var isPerfectSquare = function(num) {
    return Math.sqrt(num) === parseInt(Math.sqrt(num))
};
*/

var isPerfectSquare = function (num) {
    if (num < 2) return true;
    let min = 2;
    let max = Math.floor(num / 2);

    while (min <= max) {
        const pivot = min + Math.floor((max - min) / 2);
        const sqr = pivot ** 2;
        if (sqr === num) return pivot;
        if (sqr > num) {
            max = pivot - 1;
        } else {
            min = pivot + 1;
        }
    }
    return false;
};
