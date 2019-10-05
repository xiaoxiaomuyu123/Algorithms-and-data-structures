// 程序表示：分为两部分
// 第一部分表示一个链表的节点，因为 Listnode 基本上不需要方法，所以直接用 ES5 的构造函数写法
function ListNode(key) {
    // 先把数据 key 传进来
    this.key = key;
    this.next = null;
}

class ListNode0 {
    constructor(key) {
        this.key = key;
        this.next = null;
    }
}

// 第二部分表示整个单向链表，后续需要添加方法，为了写起来方便，所以用 es6 的 class 写法

// class Linkedlist {
//     constrcutor() {
//         // 初始化的时候把头指针指向 null
//         this.head = null
//     }
// }

// 链表中插入元素
class LinkedList{
    constructor() {
        this.head = null
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
}

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
console.log(linkedList)

console.log(linkedList.find(node6));

/**
 * 功能增强版本
 *
 *
 function ListNode(key) {
    this.key = key;
    this.next = null;
}

 class LinkedList {
    constructor(key) {
        this.head = null;
        this.length = 0;
    }

    add(node) {
        if(this.head !== null) {
            node.next = this.head;
        }
        this.head = node;
        this.length++;
    }

    get(i) {
        let p = this.head;
        let j = 1;
        while(p.next && j < i) {
            p = p.next;
            j++
        }
        return p ? p.key : null;
    }

    insert(i, node) {
        this.length++;
        let p = this.head;
        let j = 1;
        while(p.next && j < i) {
            p = p.next;
            j++;
        }
        node.next = p.next;
        p.next = node;
    }

    delete(i) {
        if(i > this.length) {
            throw error;
        }

        this.length--;
        let p = this.head;
        if(i === 1) {
            this.head = p.next;
        } else {
            let j = 1;
            // 找到 i-1 个节点
            while(p.next && j < i-1) {
                p = p.next;
                j++;
            }
            let q = p.next;
            p.next = q.next;
        }
    }

    modify(i, x) {
        if(i > this.length) {
            throw error;
        }
        let p = this.head;
        let j = 1;
        while(p.next && j < i) {
            p = p.next;
            j++;
        }
        p.key = x;

    }
}

 let node1 = new ListNode(1);
 let node2 = new ListNode(2);
 let node3 = new ListNode(3);
 let node4 = new ListNode(4);

 let linkedList = new LinkedList();

 linkedList.add(node3);
 linkedList.add(node2);
 linkedList.add(node1);

 console.log(linkedList.modify(2, 9));
 console.log(linkedList);

 **/