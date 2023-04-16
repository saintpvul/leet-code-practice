/*

Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

*/

// solution

var sortedSquares = function (nums) {
    let squares = [];
    for (int of nums) {
        squares.push(Math.pow(int, 2));
    }
    return squares.sort((a, b) => a - b);
};
