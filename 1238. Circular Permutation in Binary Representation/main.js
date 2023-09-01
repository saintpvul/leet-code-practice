/*

Given 2 integers n and start. Your task is return any permutation p of (0,1,2.....,2^n -1) such that :

p[0] = start
p[i] and p[i+1] differ by only one bit in their binary representation.
p[0] and p[2^n -1] must also differ by only one bit in their binary representation.

*/

// solution

var circularPermutation = function (n, start) {
    const result = [start];
    const visited = new Set([start]);

    function differByOneBit(a, b) {
        const xor = a ^ b;
        return (xor & (xor - 1)) === 0;
    }

    while (result.length < 2 ** n) {
        let found = false;

        for (let i = 0; i < n; i++) {
            const neighbor = result[result.length - 1] ^ (1 << i);

            if (
                !visited.has(neighbor) &&
                differByOneBit(result[result.length - 1], neighbor)
            ) {
                result.push(neighbor);
                visited.add(neighbor);
                found = true;
                break;
            }
        }

        if (!found) {
            for (let i = 0; i < n; i++) {
                const neighbor = result[result.length - 1] ^ (1 << i);

                if (!visited.has(neighbor)) {
                    result.push(neighbor);
                    visited.add(neighbor);
                    break;
                }
            }
        }
    }

    return result;
};
