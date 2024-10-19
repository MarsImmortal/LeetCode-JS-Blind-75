class Solution{
    twoSum(numbers, target){
        const map = new Map();
        for (let i = 0; i<numbers.length; i++){
            tmp = target-numbers[i];
            if (map.has(tmp)) return [map.get(tmp),i+1];
            map.set(numbers[i], i+1);
        }
        return [];
    }
}

//quite easy but not the best approach
//time and space complexity: on and on