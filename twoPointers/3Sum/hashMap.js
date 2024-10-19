// array = [a,b,c,d,e,f]
//         [i,j,j,j,j,j] first iteration
//         [-,i,j,j,j,j] second iteration 
// ... and so on
class Solution{
    threeSum(nums){
        nums.sort((a,b)=>a-b) //sort arr
        count = new Map(); // create freq hash map
        for (let num of nums) count.set(num, (count[num]||0)+1); //for loop to enter the vals
        
        const res = []; //empty result arr
        for (let i =0; i<nums.length; i++){ //first for loop
            count.set(nums[i], count[i]-1);//reduce the frequency/count of the element in use
            if (i>0 && nums[i]===nums[i-1]) continue; //if the element is same to the prev one skip 
            for (let j= i+1; j<nums.length; j++){ //second for loop 
                count.set(nums[i], nums[i]-1); //reduce the count of the element being used
                if (j>i+1 && nums[j]===nums[j-1]) continue; //if the prev element was same skip 
                const target = -(nums[i]+nums[j]); //set the value for target that is the sum of ith and jth element
                if (count.get(target)>0) res.push([nums[i], nums[j], target]); //check if frq of the target in the hash map is >0 if yes then push the triplets in result
            }
            for (let j =0; j<nums.length; j++) count.set(nums[j], count.get[j]+1); //after j iterations add the frequencies of the used elements
        }
        return res; 
    }
}

//hardest to implement and leas intuitive
//2nd best
//time and space complexity: on2 and on