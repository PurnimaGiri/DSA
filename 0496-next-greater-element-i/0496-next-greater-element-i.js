/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    var great = function(target){
        let t = 1
        for(let i = 0;i < nums2.length;i++){
            if(nums2[i] == target){
                for(let j = i+1; j<nums2.length;j++){
                    if(nums2[j] > target){
                        return nums2[j]
                    }
            }
        }
    }
    return -1
    };
    let r = []
    for(let i = 0 ; i < nums1.length ; i++){
        r.push(great(nums1[i]))
    }
    return r
};