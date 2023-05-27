/*

Given a 0-indexed string word and a character ch, reverse the segment of word that starts at index 0 and ends at the index of the first occurrence of ch (inclusive). If the character ch does not exist in word, do nothing.

For example, if word = "abcdefd" and ch = "d", then you should reverse the segment that starts at 0 and ends at 3 (inclusive). The resulting string will be "dcbaefd".
Return the resulting string.

*/

// solution

// var reversePrefix = function (word, ch) {
//     let prefixEnd = word.indexOf(ch) + 1;
//     return (
//         word.slice(0, prefixEnd).split("").reverse().join("") +
//         word.slice(prefixEnd)
//     );
// };
// the same but a bit faster
var reversePrefix = function (word, ch) {
    let prefixEnd = word.indexOf(ch) + 1;
    let prefix = word.slice(0, prefixEnd);
    let reversedPrefix = "";
    for (let i = prefix.length - 1; i >= 0; i--) {
        reversedPrefix += prefix[i];
    }
    return reversedPrefix + word.slice(prefixEnd);
};
