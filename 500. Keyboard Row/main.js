/*

Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.

In the American keyboard:

the first row consists of the characters "qwertyuiop",
the second row consists of the characters "asdfghjkl", and
the third row consists of the characters "zxcvbnm".

*/

// solution

var findWords = function (words) {
    const keyboard = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
    const results = [];
    for (let word of words) {
        let row = -1;
        let isOneRow = true;
        for (let i = 0; i < keyboard.length; i++) {
            if (keyboard[i].indexOf(word[0].toLowerCase()) !== -1) {
                row = i;
                break;
            }
        }
        for (let char of word) {
            if (keyboard[row].indexOf(char.toLowerCase()) === -1) {
                isOneRow = false;
                break;
            }
        }
        if (isOneRow) {
            results.push(word);
        }
    }
    return results;
};
