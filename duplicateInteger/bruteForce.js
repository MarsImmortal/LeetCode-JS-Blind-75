class Solution{
    // @param {numbers[]} nums
    // @return {boolean} 
    hasDuplicate(nums) {
        for (let i = 0; i<nums.length; i++){ //get first element
            for(let j=i+1; j<nums.length; j++){ // get the next element for comparison
                if (nums[i]=== nums[j]){ //if they are equal return true else false
                    return true;
                }
            }
        }
        return false;
    }
}
//time complexity : o(n2)
//space complexity; o(1)
