/*

An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.

You are also given three integers sr, sc, and color. You should perform a flood fill on the image starting from the pixel image[sr][sc].

To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with color.

Return the modified image after performing the flood fill.

*/

// solution

var floodFill = function (image, sr, sc, color) {
    if (image[sr][sc] === color) {
        return image;
    }

    const dfs = (image, r, c, currColor, color) => {
        if (
            r < 0 ||
            r >= image.length ||
            c < 0 ||
            c >= image[0].length ||
            image[r][c] != currColor
        ) {
            return;
        }
        image[r][c] = color;
        dfs(image, r + 1, c, currColor, color);
        dfs(image, r - 1, c, currColor, color);
        dfs(image, r, c + 1, currColor, color);
        dfs(image, r, c - 1, currColor, color);
    };

    dfs(image, sr, sc, image[sr][sc], color);
    return image;
};
