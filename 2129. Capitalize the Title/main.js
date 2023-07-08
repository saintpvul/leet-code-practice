/*

You are given a string title consisting of one or more words separated by a single space, where each word consists of English letters. Capitalize the string by changing the capitalization of each word such that:

If the length of the word is 1 or 2 letters, change all letters to lowercase.
Otherwise, change the first letter to uppercase and the remaining letters to lowercase.
Return the capitalized title.

*/

// solution

var capitalizeTitle = function (title) {
    title = title.split(" ");
    for (let i = 0; i < title.length; i++) {
        if (title[i].length <= 2) {
            title[i] = title[i].toLowerCase();
        } else {
            title[i] =
                title[i].charAt(0).toUpperCase() +
                title[i].slice(1).toLowerCase();
        }
    }
    return title.join(" ");
};
