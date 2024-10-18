class Solution{
    alphaNum(char){
        return (char >='a' && char <= 'z') || 
        (char >= '0' && char<='9')||
        (char >='A' && char <='Z')
    }

    isPlindrome(str){
        const newStr = "";
        for (let char of str){
            if (this.alphaNum(char))newStr+=char.toLowerCase();
        }
        return newStr === newStr.split("").reverse().join("");
    }
}
//time complixity and space complexity on and on

