var findNumbers = function(nums) {
    let ans  = 0 
    for(let i = 0 ; i < nums.length ; i++){
        let digit = 0
        let n = nums[i]
        while(n>=1){
           n = Math.floor(n/10)
            digit += 1
        }
        if(digit % 2 == 0){
            ans += 1
        }
    }
    return ans
};
