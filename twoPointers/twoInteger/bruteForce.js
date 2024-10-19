class Solution{
    twoSum(numbers, target){
        for (let i =0; i<numbers.length; i++){
            for(let j = i+1; j,numbers.length; j++){
                if (numbers[i]===numbers[j]) return [i+=1, j+=1];

            }
        }
        return [-1, -1];
    }
}
//time and space complexity: on2 and o1
//brute force are you dumb bruh!?