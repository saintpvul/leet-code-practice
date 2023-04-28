/*

Given a string array words, return an array of all characters that show up in all strings within the words (including duplicates). You may return the answer in any order.
 
*/

// solution

var commonChars = function (words) {
    let letters = [];
    for (let i = 0; i < words[0].length; i++) {
        let current = words[0][i];
        for (let j = 1; j < words.length; j++) {
            if (!words[j].includes(current)) {
                break;
            } else {
                words[j] = words[j].replace(current, "");
                if (j === words.length - 1) {
                    letters.push(current);
                }
            }
        }
    }
    return letters;
};
