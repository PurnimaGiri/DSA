/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let result = new Array(nums.length);
    let i = 0
    let j = nums.length - 1 
    for (let k = nums.length - 1; k >= 0; k--) {
        if (Math.abs(nums[i]) > Math.abs(nums[j])) {
            result[k] = nums[i] ** 2; 
            i++;
        } else {
            result[k] = nums[j] ** 2; 
            j--;
        }
    }
    return result
};