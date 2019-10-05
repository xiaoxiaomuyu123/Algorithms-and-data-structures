/**************** 双向链表 ******************/

// 双向链表的节点
function DoubleLinkedNode(key) {
    this.key = key;
    this.next = null;
    this.prev = null;
}

// 双向链表
class DoubleLinkedList {
    constructor() {
        this.head = null;
    }

    // 插入一个元素
    insert(node) {
        if(this.head !== null) {
            node.next = this.head;
            this.head.prev = node;
        }
        this.head = node;
    }

    // 查找一个元素
    find(node) {
        let p = this.head;
        while(p && p !== node) {
            p = p.next;
        }
        return p;
    }

    // 删除一个元素
    delete(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
        delete node.prev;
        delete node.next;
    }
}

// 测试
let node1 = new DoubleLinkedNode(1);
let node2 = new DoubleLinkedNode(2);
let node3 = new DoubleLinkedNode(3);
let node4 = new DoubleLinkedNode(4);

let doubleLinkedList = new DoubleLinkedList();

// doubleLinkedList.insert(node1);
// doubleLinkedList.insert(node2);
// doubleLinkedList.insert(node3);
//
// console.log(doubleLinkedList);
// console.log(doubleLinkedList.find(node4));

doubleLinkedList.delete(node2);
console.log('delete', doubleLinkedList);