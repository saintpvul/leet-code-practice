/*

An image smoother is a filter of the size 3 x 3 that can be applied to each cell of an image by rounding down the average of the cell and the eight surrounding cells (i.e., the average of the nine cells in the blue smoother). If one or more of the surrounding cells of a cell is not present, we do not consider it in the average (i.e., the average of the four cells in the red smoother).


Given an m x n integer matrix img representing the grayscale of an image, return the image after applying the smoother on each cell of it.

 

*/

// solution

var imageSmoother = function (img) {
    const r = img.length;
    const c = img[0].length;

    const smoothedImg = new Array(r);

    for (let i = 0; i < r; i++) {
        smoothedImg[i] = new Array(c);

        for (let j = 0; j < c; j++) {
            let sum = 0;
            let count = 0;

            for (let di = -1; di <= 1; di++) {
                for (let dj = -1; dj <= 1; dj++) {
                    const ni = i + di;
                    const nj = j + dj;

                    if (ni >= 0 && ni < r && nj >= 0 && nj < c) {
                        sum += img[ni][nj];
                        count++;
                    }
                }
            }
            const average = Math.floor(sum / count);
            smoothedImg[i][j] = average;
        }
    }
    return smoothedImg;
};
