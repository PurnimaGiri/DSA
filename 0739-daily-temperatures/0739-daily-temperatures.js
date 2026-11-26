/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let n = temperatures.length;
    let ans = new Array(n).fill(0);
    let stack = [];
    for (let i = 0; i < n; i++) {
        while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            let j = stack.pop();
            ans[j] = i - j;
        }
        stack.push(i);
    }
    return ans;

};