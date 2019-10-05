/** 循环队列 **/
class Queue {
    constructor(max) {
        this.data = Array(max);
        this.max = max;
        this.f = 0;
        this.r = 0;
        this.size = 0;
    }

    enqueue(item) {
        if(this.size === this.max) {
            throw 'queue overflow'
        }
        this.data[this.r] = item;
        this.r++;
        this.size++;
        if(this.r === this.max) {
            this.r = 0;
        }
    }

    dequeue() {
        if(this.size === 0) {
            throw 'queue underflow'
        }
        let ret = this.data[this.f];
        this.f++;
        this.size--;
        if(this.f === this.max - 1) {
            this.f = 0;
        }
        return ret;
    }

}