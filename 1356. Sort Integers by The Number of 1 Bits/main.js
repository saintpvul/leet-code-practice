/*

You are given an integer array arr. Sort the integers in the array in ascending order by the number of 1's in their binary representation and in case of two or more integers have the same number of 1's you have to sort them in ascending order.

Return the array after sorting it.

*/

// solution

// var sortByBits = function (arr) {
//     let bin = new Map();

//     for (let val of arr) {
//         bin.set(val, val.toString(2).replace(/[0]/gi, "").length);
//     }

//     return arr.sort((a, b) => {
//         let countA = bin.get(a);
//         let countB = bin.get(b);
//         return countA === countB ? a - b : countA - countB;
//     });
// };

//using bitwise operators

var sortByBits = function (arr) {
    const countBits = (num) => {
        let count = 0;
        while (num) {
            count += num & 1;
            num >>= 1;
        }
        return count;
    };

    return arr.sort((a, b) => {
        const countA = countBits(a);
        const countB = countBits(b);
        return countA === countB ? a - b : countA - countB;
    });
};
