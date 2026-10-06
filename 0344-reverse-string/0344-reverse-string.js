/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let e = s.length - 1
    let st = 0
    while(st<e){
        let temp = s[st]
        s[st] = s[e]
        s[e] = temp
        e--
        st++
    }
    
};