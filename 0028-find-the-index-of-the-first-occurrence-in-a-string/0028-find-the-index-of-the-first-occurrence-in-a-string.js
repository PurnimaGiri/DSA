/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle.length === 0){
        return 0; 
    }   
    const hl = haystack.length;
    const nl = needle.length;
    for (let i = 0; i <= hl - nl; i++) {
        if (haystack.substring(i, i + nl) === needle) {
            return i;
        }
    }

    return -1;
};