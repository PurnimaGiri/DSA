/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    let m = mat.length
    let n = mat[0].length
    if (m * n !== r * c) {
        return mat;
    }
    let flat = mat.flat()
    let ans = []
    for(let i = 0 ; i < flat.length ;i+=c){
        ans.push(flat.slice(i,i+c))
    }
    return ans
};