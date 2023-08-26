/*

Given an array of integers arr, sort the array by performing a series of pancake flips.

In one pancake flip we do the following steps:

Choose an integer k where 1 <= k <= arr.length.
Reverse the sub-array arr[0...k-1] (0-indexed).
For example, if arr = [3,2,1,4] and we performed a pancake flip choosing k = 3, we reverse the sub-array [3,2,1], so arr = [1,2,3,4] after the pancake flip at k = 3.

Return an array of the k-values corresponding to a sequence of pancake flips that sort arr. Any valid answer that sorts the array within 10 * arr.length flips will be judged as correct.

*/

// solution

var pancakeSort = function (arr) {
    const res = [];

    const reverse = (a, k) => {
        let i = 0,
            j = k - 1;

        while (i < j) {
            const temp = a[i];
            a[i] = a[j];
            a[j] = temp;
            i++;
            j--;
        }
    };

    for (let i = arr.length; i > 0; i--) {
        const target = arr.indexOf(i);

        if (target !== 0) {
            res.push(target + 1);
            reverse(arr, target + 1);
        }
        res.push(i);
        reverse(arr, i);
    }
    return res;
};
