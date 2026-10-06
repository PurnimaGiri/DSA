/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    let m = image.length
    let n = image[0].length
    for(let i = 0 ; i < m ; i++){
        let s = 0
        let e = n - 1
        while(s<e){
            let temp = image[i][s]
            image[i][s] = image[i][e]
            image[i][e] = temp
            s++
            e--
        }
    }
    for(let i = 0 ; i < m ; i++){
        for(let j = 0 ;j < n ;j++){
            if(image[i][j] == 0){
                image[i][j] = 1
            }else{
                image[i][j] = 0
            }
        }
    }
    return image
};