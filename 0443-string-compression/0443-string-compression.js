/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let index = 0
    for(let i = 0 ; i < chars.length;){
        let ch = chars[i]
        let count = 0
        while(i<chars.length && chars[i]==ch){
            count++
            i++
        }
        chars[index++] = ch 
        if(count > 1){
            let s = String(count)
            for(const c of s){
                chars[index++] = c
            }
        }
    } 
    return index

};