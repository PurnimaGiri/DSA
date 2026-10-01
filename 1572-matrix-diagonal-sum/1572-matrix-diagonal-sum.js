/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let m = mat.length
    let n = mat[0].length
    let s = 0
    for(let i = 0 ; i < m ; i++){
        s += mat[i][i]
        s += mat[i][m - 1 - i]
    }
    if(m % 2 == 1){
        s -= mat[Math.floor(m/2)][Math.floor(m/2)]
    }
    return s
};