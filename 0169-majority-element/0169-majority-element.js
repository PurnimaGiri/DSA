/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let maj = nums[0]
  let vote = 1
  for(let i = 1 ; i<nums.length ; i++){
    if(vote===0){
        vote = 1
        maj = nums[i]
    }
    else if(maj == nums[i]){
        vote++
    }else{
        vote--
    }
  }
  return maj
};