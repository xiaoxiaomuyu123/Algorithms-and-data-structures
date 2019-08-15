class Queue {
    constructor(max = 1000) {
        this.data = Array(max);
        this.p = 0;
        this.q = 0;
        this.size = 0;
        this.max = max;
    }
    enqueue(item) {
        if(this.size === this.max) {
            throw 'Queue overflow'
        }

        // 把这个元素放在 p 指针指向的位置，同时把 p 指针加一
        this.data[this.p++] = item;
        this.size++;
        if(this.p === this.max) {
            this.p = 0;
        }
    }
    dequeue() {
        if(this.size === 0) {
            throw 'Queue underflow';
        }
        const item = this.data(this.q++);
        this.size --;
        if(this.q === this.size) {
            this.q = 0;
        }
        return item;
    }
}