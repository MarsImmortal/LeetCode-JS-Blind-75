class Solution{
    binarySearch(l, r, nums, target){
        let mid = l + Math.floor(r-l/2);
        if (nums[mid] === target) return mid;
        return (nums[mid]> target) ? this.binarySearch(l, mid-1, nums, target): this.binarySearch(mid+1, r, nums, target); 
    }
    search(nums, target){
        return this.binarySearch(0, nums.length-1, nums, target);
    }
}
//Worse than itertative implementation on the basis of space complexity
//Time and space complexity O(log n) and O(log n)