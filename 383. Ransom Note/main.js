/*

Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

*/

// solution

var canConstruct = function (ransomNote, magazine) {
    magazine = magazine.split("");
    for (let i = 0; i < ransomNote.length; i++) {
        const curr = magazine.indexOf(ransomNote[i]);
        if (curr < 0) {
            return false;
        }
        magazine.splice(curr, 1);
    }
    return true;
};
