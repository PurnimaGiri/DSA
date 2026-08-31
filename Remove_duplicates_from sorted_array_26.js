var removeDuplicates = function(nums) {
    let i = 0
    for(let j = 1 ; j < nums.length ; j++){
        if(nums[i]==nums[j]){
            continue
        }else{
            i++
            nums[i]=nums[j]
        }
    }
    return i + 1
};
