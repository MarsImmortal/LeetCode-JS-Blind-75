class Solution{
    isAnagram(s,t){
        if (s.length!== t.length)return false;
        count = new Array(26).fill(0);
        for (let i =0; i<s.length; i++){
            count[s.charCodeAt(i) - 'a'.charCodeAt(0)] ++;
            count [t.charCodeAt(i) - 'a'.charCodeAt(0)] --;
        }
        return count.every(val => val === 0);
    }
}
//time and space complexity : on and o1 