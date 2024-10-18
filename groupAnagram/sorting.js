class Solution{
    groupAnagram(strs){
        const res = {};
        for (let str of strs){
            sortedStr= str.split('').sort('').join();
            if (!res[sortedStr]) res[sortedStr] = [];
            res[sortedStr].push(str);
        }
        return Object.values(res);
    }
}
// time and space complexity: omnlogn and omn

// @param: takes a string array containing multiple strings. 
// @return: returns the array of string with grouped anagrams in ascending order. 