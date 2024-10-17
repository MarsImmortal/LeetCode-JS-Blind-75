class Solution{
    hasDoplicate(nums){
        return new Set(nums).size !== nums.length; 
        //||
        // return (new Set(nums).size < nums.length)
    }
}
// time and space complexity: on & on