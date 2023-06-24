/*

Given two strings first and second, consider occurrences in some text of the form "first second third", where second comes immediately after first, and third comes immediately after second.

Return an array of all the words third for each occurrence of "first second third".

*/

// solution

var findOcurrences = function (text, first, second) {
    text = text.split(" ");
    let res = [];
    for (let i = 0; i < text.length; i++) {
        if (text[i - 2] === first && text[i - 1] === second) {
            res.push(text[i]);
        }
    }
    return res;
};
