/*

Given two arrays of strings list1 and list2, find the common strings with the least index sum.

A common string is a string that appeared in both list1 and list2.

A common string with the least index sum is a common string such that if it appeared at list1[i] and list2[j] then i + j should be the minimum value among all the other common strings.

Return all the common strings with the least index sum. Return the answer in any order.

*/

// solution

var findRestaurant = function (list1, list2) {
    let minIndexSum = Infinity;
    let commonStrings = [];

    for (let i = 0; i < list1.length; i++) {
        let elIdx = list2.indexOf(list1[i]);
        if (elIdx !== -1) {
            let indexSum = elIdx + i;
            if (indexSum < minIndexSum) {
                minIndexSum = indexSum;
                commonStrings = [list1[i]];
            } else if (indexSum === minIndexSum) {
                commonStrings.push(list1[i]);
            }
        }
    }
    return commonStrings;
};
