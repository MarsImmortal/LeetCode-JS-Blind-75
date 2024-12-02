class Solution{
    evalRPN(token) {
        const stack = []
        for (const c of token){
            if (c==='+'||c==='-'||c==='*'||c==='/'){
                const a = stack.pop()
                const b = stack.pop()
                if (c==='+') stack.push(a+b)
                else if (c==='-') stack.push(b-a)
                else if (c==='*') stack.push(a*b)
                else stack.push(Math.trunc(b/a))
            }
            else{
                stack.push(parseInt(c))
            }
        }
        const final_res = stack.pop()
        return final_res
    }
}