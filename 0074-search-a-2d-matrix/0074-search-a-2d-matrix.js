/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    // brute force
    // let m = matrix.length
    // let n = matrix[0].length
    // for(let i = 0 ; i < m ; i++){
    //     if(target < matrix[i][0]){
    //         continue
    //     }else{
    //         for(let j = 0 ; j < matrix[i].length ; j++){
    //             if(target == matrix[i][j]){
    //                 return true
    //             }
    //         }
    //     }
    // }
    // return false
    if (!matrix.length || !matrix[0].length) return false;
    
    let m = matrix.length;
    let n = matrix[0].length;
    let left = 0;
    let right = m * n - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let row = Math.floor(mid / n);
        let col = mid % n;
        let val = matrix[row][col];

        if (val === target) {
            return true;
        } else if (val < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return false;
};