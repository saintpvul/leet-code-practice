/*

Given an n x n binary matrix image, flip the image horizontally, then invert it, and return the resulting image.

To flip an image horizontally means that each row of the image is reversed.

For example, flipping [1,1,0] horizontally results in [0,1,1].
To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0.

For example, inverting [0,1,1] results in [1,0,0].

*/

// solution

var flipAndInvertImage = function (image) {
    const n = image.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < Math.floor((n + 1) / 2); j++) {
            const temp = image[i][j] ^ 1;
            image[i][j] = image[i][n - 1 - j] ^ 1;
            image[i][n - 1 - j] = temp;
        }
    }
    return image;
};
