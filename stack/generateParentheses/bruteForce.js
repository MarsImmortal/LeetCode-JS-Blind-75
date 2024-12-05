class Solution{
    //check the balance
    valid(s){
        const open =0;
        for (const c of s){
            open += c === "(" ? 1: -1;
            if (open<0) return false;
        }
        return open ===0;
    }
    //depth first search using recursion
    dfs(s, res, n){
        if (s.length === 2*n){
            if (this.valid(s)) res.push(s);
            return; 
        }
        dfs(s+"(", res, n);
        dfs(s+")", res, n);
    }
    //main func dec empty array and feed it to dfs algo
    generateParentheses(n){
        const res = [];
        dfs ("", res, n);
        return res;
    }
}
//not ideal time and space ==> (2^(2n))*n