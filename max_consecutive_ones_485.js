/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let res = 0
    let c = 0
    for(let i = 0 ; i < nums.length ; i++){
        if(nums[i]==0){
            c = 0
        }
        else{
            c += 1 
        }
        if(res<c){
            res = c
        }
    }
    return res
};
