/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function(grid) {
      const n = grid.length;
    let xyArea = 0;
    let yzArea = 0;
    let zxArea = 0;
    for (let i = 0; i < n; i++) {
        let rowMax = 0;
        let colMax = 0;
        for (let j = 0; j < n; j++) {
            if (grid[i][j] > 0) {
                xyArea++;
            }
            if (grid[i][j] > rowMax) {
                rowMax = grid[i][j];
            }
            if (grid[j][i] > colMax) {
                colMax = grid[j][i];
            }
        }
        yzArea += rowMax;
        zxArea += colMax;
    }
    return xyArea + yzArea + zxArea;

};