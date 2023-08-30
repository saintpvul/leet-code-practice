/*

An n x n grid is composed of 1 x 1 squares where each 1 x 1 square consists of a '/', '\', or blank space ' '. These characters divide the square into contiguous regions.

Given the grid grid represented as a string array, return the number of regions.

Note that backslash characters are escaped, so a '\' is represented as '\\'.

*/

// solution

var regionsBySlashes = function (grid) {
    const len = grid.length;
    const regs = new Array(len * 4 * len).fill(0).map((_, i) => i);

    const find = (i) => {
        if (i !== regs[i]) {
            regs[i] = find(regs[i]);
        }
        return regs[i];
    };

    const union = (i, j) => {
        const p = find(i);
        const q = find(j);
        regs[p] = q;
    };

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            const c = grid[i].charAt(j);
            const index = i * 4 * len + 4 * j;
            switch (c) {
                case " ":
                    union(index, index + 1);
                    union(index + 1, index + 2);
                    union(index + 2, index + 3);
                    break;
                case "/":
                    union(index, index + 3);
                    union(index + 1, index + 2);
                    break;
                case "\\":
                    union(index, index + 1);
                    union(index + 2, index + 3);
                    break;
            }
            if (i + 1 < len) union(index + 2, index + 4 * len);
            if (j + 1 < len) union(index + 1, index + 4 + 3);
        }
    }

    let res = 0;
    for (let i = 0; i < len * len * 4; i++) {
        if (regs[i] === i) res++;
    }
    return res;
};
