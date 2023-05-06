/*

You are given the strings key and message, which represent a cipher key and a secret message, respectively. The steps to decode message are as follows:

Use the first appearance of all 26 lowercase English letters in key as the order of the substitution table.
Align the substitution table with the regular English alphabet.
Each letter in message is then substituted using the table.
Spaces ' ' are transformed to themselves.
For example, given key = "happy boy" (actual key would have at least one instance of each letter in the alphabet), we have the partial substitution table of ('h' -> 'a', 'a' -> 'b', 'p' -> 'c', 'y' -> 'd', 'b' -> 'e', 'o' -> 'f').
Return the decoded message.

*/

// solution

var decodeMessage = function (key, message) {
    let code = "";
    for (let i = 0; i < key.length; i++) {
        if (key[i] != " " && !code.includes(key[i])) {
            code += key[i];
        }
    }
    let alph = "abcdefghijklmnopqrstuvwxyz";
    let res = "";
    for (let i = 0; i < message.length; i++) {
        if (message[i] != " ") {
            res += alph[code.indexOf(message[i])];
        } else {
            res += message[i];
        }
    }
    return res;
};
