var luckyNumbers = function(matrix) {
    let mr = matrix.length
    let mc = matrix[0].length
    let minrow = []
    let maxcol = []
    for(let i = 0 ; i<mr ; i++){
        let minr = matrix[i][0]
        for(let j = 0 ; j < mc ; j++){
            if(matrix[i][j] < minr){
                minr = matrix[i][j]
            }
        }

        minrow.push(minr)
    }
    for(let i = 0 ; i < mc ; i++){
        let maxc = matrix[0][i]
        for(let j = 0 ; j < mr ; j++){
            if(matrix[j][i] > maxc){
                maxc = matrix[j][i]
            }
        }
        maxcol.push(maxc)
    }
    let result = []
    for (let i of minrow) {
    if (maxcol.includes(i)) {
        result.push(i);
    }
 }
   return result
};
