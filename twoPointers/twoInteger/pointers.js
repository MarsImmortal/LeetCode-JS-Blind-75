class Solution{
    twoSum(numbers, target){ //numbers is an array in ascending order
        let l= 0, r=numbers.length-1
        while(l<r){ //while loop for pointers to iterate through the given arr
            const sum = numbers [l] + numbers [r];
            if (sum === target) return [l+=1,r+=1]; 
            else if(sum>target) r--; 
            else l++;
        }
        return [-1,-1]
    }
}
//time and space complexity: on and 1
//that's why he's the GOAT