/*

You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.

Return the number of consistent strings in the array words.

*/

// solution

var countConsistentStrings = function (allowed, words) {
    let count = 0;
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < allowed.length; j++) {
            let char = allowed[j];
            if (words[i].includes(char)) {
                words[i] = words[i].replaceAll(char, "");
            }
        }
        if (!words[i]) {
            count++;
        }
    }
    return count;
};
