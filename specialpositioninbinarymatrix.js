var numSpecial = function(mat) {
    let m = mat.length
    let n = mat[0].length
    let rowCount = new Array(m).fill(0);
    let colcount = new Array(n).fill(0);
    for(let i = 0 ; i <= m-1 ; i++){
        for(let j = 0 ; j<= n-1;j++){
            if (mat[i][j] == 1){
                rowCount[i] = rowCount[i] + 1
                colcount[j] = colcount[j] + 1 
            }
        }
    }
    let specialcount = 0;
    for(let i = 0; i<=m-1;i++){
        if(rowCount[i]!==1 ){
            continue
        }
        for(let j = 0 ; j <= n-1 ; j++){
            if(mat[i][j] === 1){
                if(colcount[j]===1){
                    specialcount+=1
                }
                break
            }
        }
    }
    return specialcount;
};
