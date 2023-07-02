/*

You are given an array of distinct integers arr and an array of integer arrays pieces, where the integers in pieces are distinct. Your goal is to form arr by concatenating the arrays in pieces in any order. However, you are not allowed to reorder the integers in each array pieces[i].

Return true if it is possible to form the array arr from pieces. Otherwise, return false.

*/

// solution

var canFormArray = function (arr, pieces) {
    const map = new Map();
    arr.forEach((num, index) => map.set(num, index));

    for (const piece of pieces) {
        if (!map.has(piece[0])) {
            return false;
        }

        const startIndex = map.get(piece[0]);
        for (let i = 0; i < piece.length; i++) {
            if (arr[startIndex + i] !== piece[i]) {
                return false;
            }
        }
    }

    return true;
};
