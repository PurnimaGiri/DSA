/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let st = []
    let l =""
    for(let i = 0 ; i < s.length ; i++){
        if(s[i] === st.at(-1)){
            st.pop()
        }else{
            st.push(s[i])
        }
    }
    return st.join("")
};