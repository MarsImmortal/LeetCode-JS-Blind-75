class Solution{
    generateParenthesis(n){
        const res = Array.from({length: n+1}, () => []);
        res[0] = [""];
        for (let k = 0; k<=n; k++){
            for (let i = 0; i<k; i++){
                for (const left of res[i]){
                    for (const right of res[k-i-1]){
                        res[k].push("(" + left + ")" + right);
                    }
                }
            }
        }
        return res[n];
    }
}
// complex than back tracking and has the same
//space and time complexity as ==> O(4^n/n^(1/2)) and O(n)