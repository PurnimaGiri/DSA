/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    let maxVal = Math.max(...arr1)
    let counts = new Array(maxVal + 1).fill(0)
    for(let i = 0 ; i < arr1.length ; i++){
        counts[arr1[i]] += 1
    }
    let result = []
    for (const num of arr2) {
        while (counts[num] > 0) {
            result.push(num);
            counts[num]--;
        }
    }
    for (let num = 0; num < counts.length; num++) {
        while (counts[num] > 0) {
            result.push(num)
            counts[num]--
        }
    }

    return result

};