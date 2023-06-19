/*

We have two special characters:

The first character can be represented by one bit 0.
The second character can be represented by two bits (10 or 11).
Given a binary array bits that ends with 0, return true if the last character must be a one-bit character.

*/

// solution

var isOneBitCharacter = function (bits) {
    let i = 0;
    while (i < bits.length - 1) {
        if (bits[i] === 0) {
            i++;
        } else {
            i += 2;
        }
    }
    return i === bits.length - 1;
};
