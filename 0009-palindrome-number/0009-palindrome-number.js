/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let num = String(x)
    let i = 0
    let j = num.length - 1
    while(i < j){
        if(num[i]!=num[j]){
            return false
        }
        i++
        j--
    }
    return true
};