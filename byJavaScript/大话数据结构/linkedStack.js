/**** 栈的链式存储结构的实现 *****/
function LinkedNode(key) {
    this.key = key;
    this.next = null;
}

class LinkedStack {
    constructor() {
        this.top = null;
        this.length = 0;
    }
    push(node) {
        if(this.top !== null) {
            node.next = this.top;
        }
        this.top = node;
        this.length++;
    }
    pop() {
        if(this.top === null) {
            throw 'stack underflow'
        }
        this.length--;
        let ret = this.top;
        this.top = this.top.next;
        ret.next = null;
        return ret.key;
    }
}

let node1 = new LinkedNode(1);
let node2 = new LinkedNode(2);
let node3 = new LinkedNode(3);
let node4 = new LinkedNode(4);
let node5 = new LinkedNode(5);

let linkedStack = new LinkedStack();
linkedStack.push(node4);
linkedStack.push(node3);
linkedStack.push(node2);
linkedStack.push(node1);

