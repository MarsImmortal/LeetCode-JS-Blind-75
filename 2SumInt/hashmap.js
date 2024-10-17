class Solution{
    twoSum(nums, target){
        const map = new Map()

        for (let i =0; i<nums.length; i++){
            const num = nums[i];
            const complement = target - num;
            const sumIndex = map.get(complement);
            if(map.has(complement))return [index, sumIndex];
            map.set(num, index);
        }

        return [-1,-1];
    }
}