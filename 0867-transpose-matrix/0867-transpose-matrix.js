/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    let m = matrix.length
    let n = matrix[0].length
    let mat = []
    for (let i = 0; i < n; i++) {
        mat[i] = []
        for (let j = 0; j < m; j++) {
            mat[i][j] = 0
    }
    }
    for(let i = 0 ; i < m ; i++){
        for(let j = 0 ; j < n ; j++){
            mat[j][i] = matrix[i][j]
        }
    }
    return mat

};