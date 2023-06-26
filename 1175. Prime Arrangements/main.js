/*

Return the number of permutations of 1 to n so that prime numbers are at prime indices (1-indexed.)

(Recall that an integer is prime if and only if it is greater than 1, and cannot be written as a product of two positive integers both smaller than it.)

Since the answer may be large, return the answer modulo 10^9 + 7.

*/

// solution

var numPrimeArrangements = function (n) {
    const kMod = 1e9 + 7;

    function isPrime(num) {
        if (num < 2) {
            return false;
        }
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }

    function factorial(num) {
        let result = BigInt(1);
        for (let i = 2; i <= num; i++) {
            result = (result * BigInt(i)) % BigInt(kMod);
        }
        return result;
    }

    let primeCount = 0;
    for (let i = 1; i <= n; i++) {
        if (isPrime(i)) {
            primeCount++;
        }
    }

    const primeFactorial = factorial(primeCount);
    const nonPrimeFactorial = factorial(n - primeCount);

    return Number((primeFactorial * nonPrimeFactorial) % BigInt(kMod));
};
