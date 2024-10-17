class Solution{
    hasDuplicate(nums){
        nums.sort((a,b)=> a-b);
        for (let i = 1; i<nums.length; i++){
            if (nums[i]===nums[i-1]) return true;
        }
        return true;
    }
}
// time and space : on logn and on || o1 depending on the sorting algo