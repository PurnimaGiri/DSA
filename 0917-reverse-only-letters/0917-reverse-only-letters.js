/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    const isalpha = (str) => /^[a-zA-Z]+$/.test(str);
    let stack = []
    let ans = []
    for(let i = 0 ; i < s.length ; i++){
        if(isalpha(s[i])){
            stack.push(s[i])
        }
    }
    for(let i = 0 ; i < s.length ; i++){
        if(isalpha(s[i])){
            ans.push(stack.pop())
        }else{
            ans.push(s[i])
        }
    }
    return ans.join("")
};