/*

You are given an even integer n​​​​​​. You initially have a permutation perm of size n​​ where perm[i] == i​ (0-indexed)​​​​.

In one operation, you will create a new array arr, and for each i:

If i % 2 == 0, then arr[i] = perm[i / 2].
If i % 2 == 1, then arr[i] = perm[n / 2 + (i - 1) / 2].
You will then assign arr​​​​ to perm.

Return the minimum non-zero number of operations you need to perform on perm to return the permutation to its initial value.

*/

// solution

var reinitializePermutation = function (n) {
    let perm = new Array(n);
    for (let i = 0; i < n; i++) {
        perm[i] = i;
    }

    let arr = new Array(n);
    let ops = 0;

    while (true) {
        for (let i = 0; i < n; i++) {
            if (i % 2 === 0) {
                arr[i] = perm[i / 2];
            } else {
                arr[i] = perm[n / 2 + Math.floor((i - 1) / 2)];
            }
        }
        ops++;

        if (arr.every((value, index) => value === index)) {
            break;
        }

        [perm, arr] = [arr, perm];
    }

    return ops;
};
