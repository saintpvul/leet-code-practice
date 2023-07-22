/*

You are given a 0-indexed array words consisting of distinct strings.

The string words[i] can be paired with the string words[j] if:

The string words[i] is equal to the reversed string of words[j].
0 <= i < j < words.length.
Return the maximum number of pairs that can be formed from the array words.

Note that each string can belong in at most one pair.

*/

// solution

var maximumNumberOfStringPairs = function (words) {
    let pairs = 0;

    for (let i = 0; i < words.length; i++) {
        let reversedCurrent = words[i].split("").reverse().join("");
        for (let j = i + 1; j < words.length; j++) {
            if (words[j] === reversedCurrent) {
                pairs++;
            }
        }
    }
    return pairs;
};
