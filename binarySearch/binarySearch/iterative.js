class Solution{
    search(nums, target){
        let l =0, r=nums.length-1, mid = Math.floor(nums.length/2);
        while(l<=r){
            //find the mid element
            mid =  l + Math.floor(r-l/2);
            if (nums[mid]> target) r = mid-1; 
            else if (nums[mid] < target) l=mid+1;
            else return mid;
        }
        return -1; 
    }
}
//time and space complexity O(log n) and O(1)
