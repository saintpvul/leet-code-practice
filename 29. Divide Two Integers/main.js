/*

Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.

The integer division should truncate toward zero, which means losing its fractional part. For example, 8.345 would be truncated to 8, and -2.7335 would be truncated to -2.

Return the quotient after dividing dividend by divisor.

Note: Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231, 231 − 1]. For this problem, if the quotient is strictly greater than 231 - 1, then return 231 - 1, and if the quotient is strictly less than -231, then return -231.

*/

// solution

var divide = function (dividend, divisor) {
    const MAX_INT = 2 ** 31 - 1;
    const MIN_INT = -(2 ** 31);

    if (divisor === 0 || (dividend === MIN_INT && divisor === -1)) {
        return MAX_INT;
    }

    if (divisor === dividend) {
        return 1;
    }

    const sign =
        (dividend > 0 && divisor < 0) || (dividend < 0 && divisor > 0) ? -1 : 1;

    let quotient = 0;
    let absoluteDividend = Math.abs(dividend);
    let absoluteDivisor = Math.abs(divisor);

    while (absoluteDividend >= absoluteDivisor) {
        let shift = 0;
        let shiftedDivisor = absoluteDivisor;

        while (absoluteDividend >= shiftedDivisor) {
            shift++;
            shiftedDivisor = absoluteDivisor << shift;
            if (shiftedDivisor < 0) {
                break;
            }
        }

        quotient += 1 << (shift - 1);
        absoluteDividend -= absoluteDivisor << (shift - 1);
    }

    return sign === -1 ? -quotient : quotient;
};
