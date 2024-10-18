class Solution{
    alphaNum(char){
        return (char >='a' && char <= 'z') || 
        (char >= '0' && char<='9')||
        (char >='A' && char <='Z')
    }
    isPalindrome(s){
        let l = 0, r = s.length-1; //init pointers save space
        while (l<r){ //while loop to keep track of pointers
            while (l<r && !this.alphaNum(s[l]))l++; // check wether the left pointer is alpha numeric, if not skip.
            while (r>l && !this.alphaNum(s[r]))r--; // check right pointer
            //make sure to avoid out of bounds error by incorporating l<r condition in both while loops
            if (s[l].toLowerCase() !== s[r].toLowerCase()) return false; //if one of the elements are not same retrun false
            l++; //increment left pointer
            r--; //increment right pointer
        }
        return false; 
    }
}
//time and space complexity: on and o1 hence better than reversing the string. 