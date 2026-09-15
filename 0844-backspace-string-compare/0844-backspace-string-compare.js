/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let ar1 = []
    let ar2 = []
    for(let i = 0 ; i<s.length ; i++){
        if(s[i]!="#"){
            ar1.push(s[i])
        }else{
            ar1.pop()
        }
    }
    for(let i = 0 ; i< t.length ; i++){
        if(t[i]!="#"){
            ar2.push(t[i])
        }else{
            ar2.pop()
        }
    }
    return ar1.join('') === ar2.join('');
};