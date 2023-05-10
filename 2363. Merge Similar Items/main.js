/*

You are given two 2D integer arrays, items1 and items2, representing two sets of items. Each array items has the following properties:

items[i] = [valuei, weighti] where valuei represents the value and weighti represents the weight of the ith item.
The value of each item in items is unique.
Return a 2D integer array ret where ret[i] = [valuei, weighti], with weighti being the sum of weights of all items with value valuei.

Note: ret should be returned in ascending order by value.

*/

// solution

var mergeSimilarItems = function (items1, items2) {
    const map = new Map();

    for (let i = 0; i < items1.length; i++) {
        const [value, weight] = items1[i];
        if (!map.has(value)) {
            map.set(value, weight);
        } else {
            map.set(value, map.get(value) + weight);
        }
    }

    for (let i = 0; i < items2.length; i++) {
        const [value, weight] = items2[i];
        if (!map.has(value)) {
            map.set(value, weight);
        } else {
            map.set(value, map.get(value) + weight);
        }
    }

    const ret = [...map].sort((a, b) => a[0] - b[0]);

    return ret;
};
