/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
    let m = grid.length
    let n = grid[0].length
    let total = m * n
    k = k % total 
    let matrix = new Array(m);
    for (let i = 0; i < m; i++) {
        matrix[i] = new Array(n);
  }
  for(let i = 0 ; i < m ; i++){
    for(let j = 0 ; j < n ; j++){
        let current = i * n + j 
        let newpos = (current + k)%total
        let newrow = Math.floor(newpos/n)
        let newcol = newpos % n 
        matrix[newrow][newcol] = grid[i][j]
    }
  }
  return matrix

};
