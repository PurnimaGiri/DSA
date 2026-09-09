/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs || strs.length === 0){
        return ""
    } 
    strs.sort();
    let first = strs[0]
    let last = strs[strs.length - 1]
    let ans = ""
    for(let i = 0 ; i < first.length && i < last.length ; i++){
        if(first[i]==last[i]){
            ans += first[i]
        }else{
            break
        }
    }
    return ans
};