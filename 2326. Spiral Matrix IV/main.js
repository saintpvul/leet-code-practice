/*

You are given two integers m and n, which represent the dimensions of a matrix.

You are also given the head of a linked list of integers.

Generate an m x n matrix that contains the integers in the linked list presented in spiral order (clockwise), starting from the top-left of the matrix. If there are remaining empty spaces, fill them with -1.

Return the generated matrix.

*/

// solution

// beats 100% of users
var spiralMatrix = function (m, n, head) {
    const mat = Array.from({ length: m }, () => Array(n).fill(-1));

    let i = 0,
        j = 0,
        k = 0;
    const dir = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
    ];

    while (true) {
        mat[i][j] = head.val;
        head = head.next;

        if (!head) {
            break;
        }

        while (true) {
            const [x, y] = [i + dir[k][0], j + dir[k][1]];

            if (x < 0 || y < 0 || x >= m || y >= n || mat[x][y] !== -1) {
                k = (k + 1) % 4;
            } else {
                i = x;
                j = y;
                break;
            }
        }
    }
    return mat;
};
