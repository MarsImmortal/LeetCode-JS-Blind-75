class Solution{
    twoSum(numbers, target){
        for (let i = 0; i<numbers.length; i++){ //to interate through numbers
            let l = i+1, r=numbers.length-1; //extremities (excluding i th)
            const tmp = target - numbers[i];//temp var to store the difference
            const mid = math.floor(l+r/2); //find mid element
            if (numbers[mid]===tmp) return [i+=1, mid+=1] //mid is the element
            else if (numbers[mid]<tmp) l = mid+1; //lies in right half of the array
            else r = mid -1; //lies in the left half of the array
        }
        return []; //not found
    }
}

//this approach is binary search though not perfect for this question but suffices
//time and space complexity: onlogn o1