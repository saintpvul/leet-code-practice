/*

You are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays are of length n.

For each index i, names[i] and heights[i] denote the name and height of the ith person.

Return names sorted in descending order by the people's heights.

*/

// solution

var sortPeople = function (names, heights) {
    const nameHeightPairs = names.map((name, index) => [name, heights[index]]);
    nameHeightPairs.sort((pair1, pair2) => pair2[1] - pair1[1]);
    return nameHeightPairs.map((pair) => pair[0]);
};
