/***  实现一个栈结构 ***/
class Stack {
    constructor(maxLength = 1000) {
        this.data = Array(maxLength);
        this.maxLength = maxLength;
        this.top = -1;
        this.length = 0
    }
    push (item) {
        if(this.top === this.maxLength - 1) {
            throw 'stack overflow';
        }
        this.top++;
        this.length++;
        this.data[this.top] = item;
    }
    pop() {
        if(this.top === -1) {
            throw 'stack underflow'
        }
        let ret = this.data[this.top];
        this.top--;
        this.length--;
        return ret;
    }
}