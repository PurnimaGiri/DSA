/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function(img) {
     const m = img.length;
    const n = img[0].length;
    const result = Array.from({ length: m }, () => Array(n));
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            let total = 0;
            let count = 0;
            for (let dr = -1; dr <= 1; dr++) {
                for (let dc = -1; dc <= 1; dc++) {
                    const nr = r + dr;
                    const nc = c + dc;
                    if (nr >= 0 && nr < m && nc >= 0 && nc < n) {
                        total += img[nr][nc];
                        count++;
                    }
                }
            }


            result[r][c] = Math.floor(total / count);
        }
    }
    return result;

};