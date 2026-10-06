/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let m = grid.length
    let n = grid[0].length
    let c = 0
    for(let i = 0 ; i < m ; i++){
        let e = n - 1 
        while(grid[i][e] < 0){
            c++
            e--
        }
        continue
    }
    return c
};