/** 双向环链表 ***/
function LinkNode(key) {
    this.key = key;
    this.next = null;
    this.pre = null;
}

class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.pre = null;
        this.length = 0;
    }

    add(node) {
        this.length++;
        if(this.head !== null) {
            this.head.pre = node;
            node.next = this.head;
        }
        this.head = node;
    }

    insert(i, node) {
        if(i > this.length) {
            throw error;
        }
        this.length++;
        let p = this.head;
        let j = 1;
        while(p.next && j < i-1) {
            p.next = p;
            j++;
        }
        // 找到了第 i-1 个节点 p，要在 p 节点后面插入 node
        node.next = p.next;
        node.pre = p;
        p.next = node;
        node.next.pre = node;
    }
}

let node1 = new LinkNode(1);
let node2 = new LinkNode(2);
let node3 = new LinkNode(3);
let node4 = new LinkNode(4);
let node5 = new LinkNode(5);

let doubleLinkedList = new DoubleLinkedList();
doubleLinkedList.add(node1);
doubleLinkedList.add(node2);
doubleLinkedList.add(node3);
doubleLinkedList.add(node4);



