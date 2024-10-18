class Solution{
    hasDuplicate(nums){
        const seen = new Set();
        for(let num of nums){
            if (seen.has(nums)) return true;
            seen.add(num);
        }
        return false; 
    }
}