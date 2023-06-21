/*

Given a string s, reverse the string according to the following rules:

All the characters that are not English letters remain in the same position.
All the English letters (lowercase or uppercase) should be reversed.
Return s after reversing it.

*/

// solution

var reverseOnlyLetters = function (s) {
    let letters = s.replace(/[^a-zA-Z]/g, "");
    let reversed = "";

    let j = letters.length - 1;
    for (let i = 0; i < s.length; i++) {
        if (/[a-zA-Z]/.test(s[i])) {
            reversed += letters[j];
            j--;
        } else {
            reversed += s[i];
        }
    }

    return reversed;
};
