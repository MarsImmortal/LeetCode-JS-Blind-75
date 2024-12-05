class Solution{
    backTracking(openN, closedN, n, res, stack){
        if (openN===closedN && openN === n){
            res.push(stack);
            retrun; 
        }
        if (openN<n) this.backTracking(openN+1, closedN, n, res, stack + '(')
        if (closedN<openN) this.backTracking(openN, closedN+1, n, res, stack + ')')
    }
    generateParentheses(n){
        const res = [];
        this.backTracking(0,0,n,res,'')
        return res;
    }
}
//better than brute force less lines of code
//time and space complexity ==> O((4^n)/n^(1/2)) and O(n)