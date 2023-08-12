/*

You have n  tiles, where each tile has one letter tiles[i] printed on it.

Return the number of possible non-empty sequences of letters you can make using the letters printed on those tiles.

*/

// solution

var numTilePossibilities = function (tiles) {
    const count = Array.from({ length: 26 }, () => 0);
    for (const char of tiles) {
        count[char.charCodeAt() - "A".charCodeAt(0)]++;
    }
    const dfs = (cnt) => {
        let res = 0;

        for (let i = 0; i < 26; i++) {
            if (cnt[i] > 0) {
                res++;
                cnt[i]--;
                res += dfs(cnt);
                cnt[i]++;
            }
        }
        return res;
    };

    return dfs(count);
};
