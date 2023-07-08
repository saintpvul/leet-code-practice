/*

You are given an integer array digits, where each element is a digit. The array may contain duplicates.

You need to find all the unique integers that follow the given requirements:

The integer consists of the concatenation of three elements from digits in any arbitrary order.
The integer does not have leading zeros.
The integer is even.
For example, if the given digits were [1, 2, 3], integers 132 and 312 follow the requirements.

Return a sorted array of the unique integers.

*/

// solution

var findEvenNumbers = function (digits) {
    const evens = new Set();

    for (let i = 0; i < digits.length; i++) {
        for (let j = 0; j < digits.length; j++) {
            for (let k = 0; k < digits.length; k++) {
                if (i === j || i === k || j === k) {
                    continue;
                }

                const num = +("" + digits[i] + digits[j] + digits[k]);
                if (num % 2 === 0 && num.toString().length === 3) {
                    evens.add(num);
                }
            }
        }
    }

    return Array.from(evens).sort((a, b) => a - b);
};
