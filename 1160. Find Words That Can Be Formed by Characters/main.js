/*


You are given an array of strings words and a string chars.

A string is good if it can be formed by characters from chars (each character can only be used once).

Return the sum of lengths of all good strings in words.

*/

// solution

var countCharacters = function (words, chars) {
    const charsCount = new Map();

    for (const char of chars) {
        charsCount.set(char, (charsCount.get(char) || 0) + 1);
    }

    let counter = 0;

    for (const word of words) {
        const wordCount = new Map();
        let isValid = true;

        for (const char of word) {
            wordCount.set(char, (wordCount.get(char) || 0) + 1);
            if (
                !charsCount.has(char) ||
                wordCount.get(char) > charsCount.get(char)
            ) {
                isValid = false;
                break;
            }
        }

        if (isValid) {
            counter += word.length;
        }
    }

    return counter;
};
