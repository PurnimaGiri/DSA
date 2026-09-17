/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res = []
    let visit = new Set()
    function back(cur){
        if(cur.length === nums.length){
            res.push([...cur])
            return
        }
        for(let i = 0 ; i < nums.length ; i++){
            if(visit.has(nums[i])){
                continue
            }
            visit.add(nums[i])
            cur.push(nums[i])
            back(cur)
            visit.delete(nums[i])
            cur.pop()
        }
    }
    back([])
    return res
};