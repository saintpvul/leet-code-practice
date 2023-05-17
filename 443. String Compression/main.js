/*

Given an array of characters chars, compress it using the following algorithm:

Begin with an empty string s. For each group of consecutive repeating characters in chars:

If the group's length is 1, append the character to s.
Otherwise, append the character followed by the group's length.
The compressed string s should not be returned separately, but instead, be stored in the input character array chars. Note that group lengths that are 10 or longer will be split into multiple characters in chars.

After you are done modifying the input array, return the new length of the array.

You must write an algorithm that uses only constant extra space.

*/

// solution

var compress = function (chars) {
    let write = 0;
    let count = 1;

    for (let read = 1; read <= chars.length; read++) {
        if (read < chars.length && chars[read] === chars[read - 1]) {
            count++;
        } else {
            chars[write++] = chars[read - 1];

            if (count > 1) {
                const countStr = count.toString();
                for (let i = 0; i < countStr.length; i++) {
                    chars[write++] = countStr[i];
                }
            }

            count = 1;
        }
    }

    return write;
};
