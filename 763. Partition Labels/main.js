/*

You are given a string s. We want to partition the string into as many parts as possible so that each letter appears in at most one part.

Note that the partition is done so that after concatenating all the parts in order, the resultant string should be s.

Return a list of integers representing the size of these parts.

*/

// solution

var partitionLabels = function (s) {
    let lettersOccur = new Map();
    for (let i = 0; i < s.length; i++) {
        const curr = s[i];
        if (lettersOccur.has(curr)) {
            lettersOccur.get(curr).push(i);
        } else {
            lettersOccur.set(curr, [i]);
        }
    }

    let partitions = [];
    let start = 0;
    let end = 0;

    for (let i = 0; i < s.length; i++) {
        const curr = s[i];
        const currLastPosition =
            lettersOccur.get(curr)[lettersOccur.get(curr).length - 1];
        end = Math.max(end, currLastPosition);

        if (i === end) {
            partitions.push(end - start + 1);
            start = end + 1;
        }
    }

    return partitions;
};
