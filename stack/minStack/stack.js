class minStack{
    constructor(){ //initialise the req arrs
        this.stack = [];
        this.minStack = [];
    }
    //push a value in stack
    push(val){
        this.stack.push(val);
        //change the val's value based on the min val
        val = Math.min(val, this.minStack.length === 0 ? val: this.minStack[this.minStack.length-1]);
        this.minStack.push(val); //store the val on the topmost element of minStack
    }
    //remove the topmost element from min and stack
    pop(){
        this.stack.pop();
        this.minStack.pop();
    }
    // return the top most element of stack
    top(){
        return this.stack[this.stack.length -1];
    }
    // return the element with the least val (topmost of minStack)
    getMin(){
        return this.minStack[this.minStack.length -1];
    }
}