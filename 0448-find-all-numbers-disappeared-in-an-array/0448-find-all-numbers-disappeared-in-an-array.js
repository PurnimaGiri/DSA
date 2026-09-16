/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let n = nums.length
    let res = []
    let num = []
    for(let i = 0 ; i < n + 1 ; i++){
        num[i] = 0
    }
    for(let i = 0 ; i < n ; i++){
        num[nums[i]]++
    }
    for(let i = 1 ; i < n + 1 ;i++){
        if(num[i]=== 0){
            res.push(i)
        }
    }
    return res
};