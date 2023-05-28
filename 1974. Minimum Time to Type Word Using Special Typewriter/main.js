/*

There is a special typewriter with lowercase English letters 'a' to 'z' arranged in a circle with a pointer. A character can only be typed if the pointer is pointing to that character. The pointer is initially pointing to the character 'a'.


Each second, you may perform one of the following operations:

Move the pointer one character counterclockwise or clockwise.
Type the character the pointer is currently on.
Given a string word, return the minimum number of seconds to type out the characters in word.

*/

// solution

var minTimeToType = function (word) {
    let total = 0;
    let pointer = "a";

    for (let i = 0; i < word.length; i++) {
        const char = word[i];
        const clockerwise = Math.abs(pointer.charCodeAt() - char.charCodeAt());
        const counterClockerwise = 26 - clockerwise;
        const sec = Math.min(clockerwise, counterClockerwise);
        total += sec + 1;
        pointer = char;
    }
    return total;
};
