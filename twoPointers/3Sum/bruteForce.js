class Solution{
    threeSum(nums){
        const res = new Set();
        nums.sort((a,b)=>a-b);
        for (let i =0; i<nums.length; i++){
            for (let j=i+1; j<nums.length; j++){
                for (let k=j+1; k<nums.length; k++){
                    if (nums[i]+nums[j]+nums[i+1]===0) res.push(JSON.stringify([nums[i], nums[j], nums [k]]));
                }
            }
        }
        return Array.from(res).map(item => JSON.parse(item));
    }
}