/* 队列的链表实现 */

function Node(key) {
    this.key = key;
    this.next = null;
}

class QueueStack {
    constructor() {
        this.f = null;
        this.r = null;
    }

    enqueue(node) {
        if(this.f) {
            let p = this.f;
            while(p.next) {
                p = p.next;
            }
            p.next = node;
            this.r = node;
        } else {
            this.f = node;
            this.r = node;
        }
    }

    dequeue() {
        if(this.f === null) {
            throw 'queue underflow'
        }
        let ret = this.f.key;
        this.f = this.f.next;
        return ret;
    }
}

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);

let queueStack = new QueueStack();

queueStack.enqueue(node1);
queueStack.enqueue(node2);
queueStack.enqueue(node3);
queueStack.enqueue(node4);
queueStack.enqueue(node5);