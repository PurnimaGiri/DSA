/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
    let ans = 0;
    let prevCount = 0;
    let currCount = 1;
    
    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i - 1]) {
            currCount++;
        } else {
            ans += Math.min(prevCount, currCount);
            prevCount = currCount;
            currCount = 1;
        }
    }
    
    ans += Math.min(prevCount, currCount);
    return ans;
};