/*

Given two integers left and right, return the count of numbers in the inclusive range [left, right] having a prime number of set bits in their binary representation.

Recall that the number of set bits an integer has is the number of 1's present when written in binary.

For example, 21 written in binary is 10101, which has 3 set bits.

*/

// solution

var countPrimeSetBits = function (left, right) {
    let primeCount = 0;

    for (let i = left; i <= right; i++) {
        let countBits = countSetBits(i);
        if (isPrime(countBits)) {
            primeCount++;
        }
    }

    return primeCount;
};

function countSetBits(number) {
    let count = 0;
    while (number) {
        count += number & 1;
        number >>= 1;
    }
    return count;
}

function isPrime(number) {
    if (number < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}
