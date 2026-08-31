var moveZeroes = function(nums) {
    let i = 0
    let temp
    for(let j = 0 ; j < nums.length ; j++){
        if(nums[j]!=0){
            temp = nums[i]
            nums[i] = nums[j]
            nums[j] = temp
            i++
        }
    }
    return nums
};
