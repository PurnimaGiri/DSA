var matrixReshape = function(mat, r, c) {
    let mr = mat.length
    let mc = mat[0].length
    if(mr*mc != r*c){
        return mat
    }
    else{
        let row = 0
        let col = 0
        let m = []
    for(let i = 0 ; i < r ; i++){
        m[i] = []
        for(let j = 0 ; j < c ; j++){
            m[i][j] = mat[row][col]
            col++
            if(col == mc){
                col = 0
                row++
            }
        }
    }
    return m
    }
    
};
