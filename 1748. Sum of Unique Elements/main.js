/*

You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.

Return the sum of all the unique elements of nums.

*/

// solution

var sumOfUnique = function (nums) {
    let uniq = 0;
    let counter = {};
    for (let num of nums) {
        counter[num] ? counter[num]++ : (counter[num] = 1);
    }
    for (let num in counter) {
        counter[num] > 1 ? (uniq += 0) : (uniq += +num);
    }
    return uniq;
};
