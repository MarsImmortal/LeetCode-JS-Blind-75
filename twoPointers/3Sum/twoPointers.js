class Solution{
    threeSum(nums){ //target is supposed to be 0
        //@param : numbers array
        //@return: array with distinct triplets summing upto 0
        const res = []; //initialising empty arr
        nums.sort((a,b)=>(a-b)); //using .sort but can also implement a sort func 
        for(let i = 0;i<nums.length; i++){ //iteration loop 1
            if (nums[i]>0) break; //if first element is >0 no point for further traversal
            if (i>0 && nums[i]===i+1) continue; //both elements are same : skip 
            let l=i+1, r=nums.length-1;
            while(l<r){ //iteration loop 2 using l and r pointers 
                sum = nums[i]+nums[l]+nums[r];
                if (sum > 0) r--; 
                else if (sum<0)l++;
                else {
                    res.push([nums[i]+nums[l]+nums[r]]) //push the vals in res arr
                    l++;
                    r--;
                    while(nums[l]===nums[l-1] && l<r) l++; //if new left pointer is same as prev increment the value of l
                }
            }
        }
        return res;
    }
}
//best so far with time and space complexity: on2 and on or o1 depending on the sorting algo