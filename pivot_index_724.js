var pivotIndex = function(nums) {
    let l = 0
    let r = 0
    for(let i = 0 ; i<nums.length;i++){
        r = r + nums[i]
    }
    for(let i = 0 ; i < nums.length ; i++){
        let val = nums[i]
        r = r - val
        if(l == r){
            return i
        }
        l = l + val
    }
    return -1
};
