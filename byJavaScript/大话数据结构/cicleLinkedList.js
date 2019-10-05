/*
* 循环单向链表
* 先生成单向链表，在单向链表的最后加一个尾指针，尾指针的 next 指向头指针
* */
function ListNode(key) {
    this.key = key;
    this.next = null;
}

class LinkedList {
    constructor(key) {
        this.key = key;
        this.next = null;
        this.length = 0;
    }

    add(node) {
        this.length++;
        if(this.head !== null) {
            node.next = this.head;
        }
        this.head = node;
    }
}

let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
let node4 = new ListNode(4);

let linkedList = new LinkedList();
linkedList.add(node1);
linkedList.add(node2);
linkedList.add(node3);
linkedList.add(node4);

// 生成循环单向链表
function cicleLinedList(linkedList) {
    let j = 1;
    let p = linkedList.head;
    while(p.next && j < linkedList.length) {
        p = p.next;
        j++;
    }
    p.next = this.head;
}

console.log(cicleLinedList(linkedList));