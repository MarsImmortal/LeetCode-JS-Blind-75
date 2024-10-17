class Solution{
    isAnagram(s, t){
        return t.split('').sort().join() === s.split('').sort().join();
    }
}
//time complexity is poor at nlogn
//space complexity : 1 || n depending on the sorting algo
//worst code for sol