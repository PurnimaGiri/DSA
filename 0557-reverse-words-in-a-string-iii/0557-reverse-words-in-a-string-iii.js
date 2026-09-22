/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let t = s.split(" ")
    let m = []
    for(let i = 0 ; i < t.length ; i++){
        let r = t[i].split("").reverse().join("")
        m.push(r)
    }
    return m.join(" ")

};