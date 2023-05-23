/*

You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase may be incomplete.

Given the integer n, return the number of complete rows of the staircase you will build.

*/

// solution

// math solution
// var arrangeCoins = function (n) {
//     return Math.floor((Math.sqrt(8 * n + 1) - 1) / 2);
// };

// using binary search
var arrangeCoins = function (n) {
    let left = 0;
    let right = n;
    let maxCompleted = 0;

    while (left <= right) {
        const pivot = Math.floor(left + (right - left) / 2);
        const coins = (pivot * (pivot + 1)) / 2;

        if (coins === n) {
            return pivot;
        } else if (coins < n) {
            maxCompleted = pivot;
            left = pivot + 1;
        } else {
            right = pivot - 1;
        }
    }
    return maxCompleted;
};
