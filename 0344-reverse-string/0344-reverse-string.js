/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let len = s.length - 1
    let i = 0 
        while(len >= 0 && i <= len){
            [s[i],s[len]] = [s[len],s[i]]
            len--
            i++
        }

};