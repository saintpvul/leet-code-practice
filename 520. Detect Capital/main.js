/*

We define the usage of capitals in a word to be right when one of the following cases holds:

All letters in this word are capitals, like "USA".
All letters in this word are not capitals, like "leetcode".
Only the first letter in this word is capital, like "Google".
Given a string word, return true if the usage of capitals in it is right.

*/

// solution

var detectCapitalUse = function (word) {
    if (word.length === 1) {
        return true;
    }

    const isFirstLetterCapital = word[0] === word[0].toUpperCase();
    const isSecondLetterLowerCase = word[1] === word[1].toLowerCase();

    if (!isFirstLetterCapital && !isSecondLetterLowerCase) {
        return false;
    }

    for (let i = 2; i < word.length; i++) {
        if (isFirstLetterCapital) {
            if (isSecondLetterLowerCase && word[i] !== word[i].toLowerCase()) {
                return false;
            }
            if (!isSecondLetterLowerCase && word[i] !== word[i].toUpperCase()) {
                return false;
            }
        } else {
            if (word[i] !== word[i].toLowerCase()) {
                return false;
            }
        }
    }

    return true;
};
