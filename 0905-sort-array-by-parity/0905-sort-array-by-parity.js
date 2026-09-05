/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let left = 0
    let right = nums.length - 1
    while(left != right){
        if(nums[left]%2!=0){
            let temp = nums[left]
            nums[left] = nums[right]
            nums[right] = temp
            right--
        }else{
            left++
        }
    }
    return nums
};