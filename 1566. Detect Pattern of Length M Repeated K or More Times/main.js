/*

Given an array of positive integers arr, find a pattern of length m that is repeated k or more times.

A pattern is a subarray (consecutive sub-sequence) that consists of one or more values, repeated multiple times consecutively without overlapping. A pattern is defined by its length and the number of repetitions.

Return true if there exists a pattern of length m that is repeated k or more times, otherwise return false.

*/

// solution

var containsPattern = function (arr, m, k) {
    const n = arr.length;

    for (let i = 0; i + m * k <= n; ++i) {
        const pattern = arr.slice(i, i + m);
        let found = true;

        for (let t = 1; t < k; ++t) {
            const subarray = arr.slice(i + m * t, i + m * (t + 1));

            if (!arraysEqual(pattern, subarray)) {
                found = false;
                break;
            }
        }

        if (found) {
            return true;
        }
    }

    return false;
};

function arraysEqual(a, b) {
    if (a.length !== b.length) {
        return false;
    }

    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            return false;
        }
    }

    return true;
}
