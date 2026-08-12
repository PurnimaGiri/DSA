
var isToeplitzMatrix = function(matrix) {
    let row = matrix.length
    let col = matrix[0].length
    for(i = 1 ; i < row ; i++){
        for(j = 1 ; j <col ; j++){
            if(matrix[i][j]!=matrix[i-1][j-1]){
                return false
            }
            
        }
    }
    return true 
};
