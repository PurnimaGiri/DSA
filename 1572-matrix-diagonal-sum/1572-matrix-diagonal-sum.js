/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    const n = mat.length;
    let total = 0;
    for (let i = 0; i < n; i++) {
        total += mat[i][i];
        total += mat[i][n - 1 - i];
    }
    if (n % 2 === 1) {
        total -= mat[Math.floor(n / 2)][Math.floor(n / 2)];
    }return total;

};