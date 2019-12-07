// 反转单向链表

function ListNode(key) {
    this.key = key;
    this.next = null;
}

class LinkedList {
    constructor(max) {
        this.head = null;
    }
    insert(node) {
        // 如果链表内有值，就让新插入的值指向 head 指针指向的第一个元素
        if(this.head !== null) {
            node.next = this.head;
        }
        // 维护 head 指针
        this.head = node;
    }

    find(node) {
        let p = this.head;
        while(p && p !== node) {
            p = p.next;
        }
        // return p;
        // return p === null ? false : true;
        return p ? true : false;
    }

    /*************  反转单向链表 ***************/
    reverse(p = this.head) {
        if(p.next) {
            // 递归
            this.reverse(p.next);
            p.next.next = p;
            p.next = null;
        } else {
            this.head = p;
        }
    }
}

// 测试
let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
let node4 = new ListNode(4);
let node6 = new ListNode(6);

let linkedList = new LinkedList();
linkedList.insert(node1);
linkedList.insert(node2);
linkedList.insert(node3);
linkedList.insert(node4);
console.log(linkedList);

console.log(linkedList.reverse());
console.log(linkedList)