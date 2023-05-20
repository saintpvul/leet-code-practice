/*

There is a malfunctioning keyboard where some letter keys do not work. All other keys on the keyboard work properly.

Given a string text of words separated by a single space (no leading or trailing spaces) and a string brokenLetters of all distinct letter keys that are broken, return the number of words in text you can fully type using this keyboard.

*/

// solution

var canBeTypedWords = function (text, brokenLetters) {
    const words = text.split(" ");
    const brokenSet = new Set(brokenLetters);
    let counter = 0;

    for (let i = 0; i < words.length; i++) {
        let isFullyTyped = true;
        for (let j = 0; j < words[i].length; j++) {
            if (brokenSet.has(words[i][j])) {
                isFullyTyped = false;
                break;
            }
        }
        if (isFullyTyped) {
            counter++;
        }
    }

    return counter;
};
