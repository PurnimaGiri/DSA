/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    let chars = s.split('');   
    for (let i = 0; i < chars.length; i += 2 * k) {
        let reversedPart = chars.slice(i, i + k).reverse();
        chars.splice(i, k, ...reversedPart);
    }  
    return chars.join('');
};