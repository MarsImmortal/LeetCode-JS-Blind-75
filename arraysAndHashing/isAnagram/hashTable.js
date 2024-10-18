class Solution{
    isAnagram(s,t){
        if (!s.length === t.length)return false;
        const countT= {}
        const countS = {}
        for (let i = 0; i<s.length; i++){
            countT[t[i]]= (countT[t[i]] || 0) +1;
            countS[s[i]] = (countS[s[i]] || 0) +1;
        }
        for (const key of countT){
            if (countT[key] !== countS[key])return false;
        }
        return true;
    }
}
//making objects and then mapping the values to the corresponding keys
//eg. 
//key ==> s[i] lets say for 'apple' and i =0 it will be 'a'
//val ==> corresponding will be 1 (freq of the alpha bet) 
// || countS[p] = 2

//not the optimal approach but does the job