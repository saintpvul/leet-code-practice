/*

Given an integer n, return true if n has exactly three positive divisors. Otherwise, return false.

An integer m is a divisor of n if there exists an integer k such that n = k * m.
 
*/

// solution

var isThree = function (n) {
    let countDivisors = 0;
    for (let i = n; i > 0; i--) {
        if (n % i === 0) {
            countDivisors++;
        }
    }
    return countDivisors === 3;
};
