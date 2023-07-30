/*

There are n people that are split into some unknown number of groups. Each person is labeled with a unique ID from 0 to n - 1.

You are given an integer array groupSizes, where groupSizes[i] is the size of the group that person i is in. For example, if groupSizes[1] = 3, then person 1 must be in a group of size 3.

Return a list of groups such that each person i is in a group of size groupSizes[i].

Each person should appear in exactly one group, and every person must be in a group. If there are multiple answers, return any of them. It is guaranteed that there will be at least one valid solution for the given input.

*/

// solution

var groupThePeople = function (groupSizes) {
    const map = new Map();
    const res = [];

    for (let i = 0; i < groupSizes.length; i++) {
        const size = groupSizes[i];
        const group = map.get(size) || [];
        group.push(i);
        map.set(size, group);

        if (group.length === size) {
            res.push(group);
            map.delete(size);
        }
    }

    return res;
};
