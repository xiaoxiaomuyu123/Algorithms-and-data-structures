class stack {
    constructor(max = 1000) {
        this.data = Array(max);
        this.sp = -1;
        this.max = max;
    }

    push(item) {
        if(this.sp === this.max - 1) {
            throw 'Stack Overflow'
        }
        this.data[++this.sp] = item;
    }

    pop() {
        if(this.sp === -1) {
            throw 'Stack Underflow'
        }
        return this.data[this.sp--]
    }
}