class Solution{
    // @param {numbers[]} nums
    // @return {boolean} 
    hasDuplicate(numbers) {
        for (let i = 0; i<numbers.length; i++){ //get first element
            for(let j=i+1; j<numbers.length; j++){ // get the next element for comparison
                if (numbers[i]=== numbers[j]){ //if they are equal return true else false
                    return true;
                }
            }
        }
        return false;
    }
}
//time complexity : o(n2)
//space complexity; o(1)
