class Solution{
    isValid(s){
        const stack = []; //stack ds (fifo) suppose to store only opening braces
        const map = { //map init having opening paran with corresponding close paran key
            '}':'{',
            ']':'[',
            ')':'('
        }
        for (const char of s){ //iterate through the string
            const isBracket = char in map; //check wether the element is closing bracket
            if (!isBracket){ //if not add it to stack 
                stack.push(char);
                continue; //and continue to next iteration 
            }

            const isEqual = stack[stack.length-1] === map[char]; 
            if (isEqual) { //check the top-most element of the 
                stack.pop();//stack contains the corresponding opening brace
                continue; //move to next iteration
            }

            return false; //else return false indicating the anamoly in the array
        }
        return ! stack.length; //if stack's length is 0 return true else false
    }
}//time and space complexity: on and on