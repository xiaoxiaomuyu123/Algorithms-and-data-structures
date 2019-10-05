/******  二分法查找  空间复杂度是 O(1), 时间复杂度，最好的情况是 O(1), 最坏的情况是 O(logn)******/
//


// const arr = [1, 3, 4, 5, 7, 9];
// console.log(bsearch(arr, 5)); // 3
// console.log(bsearch(arr, 8)); // -1
// console.log(bsearch(arr, 9)); // 5
// console.log(bsearch(arr, 1)); // 0


/******  插入排序  ******/


// const arr0 = [1, 3, 5];
// console.log(insert(arr0, 4));


// const arr = [2, 1, 6, 3, 5, 4];
// insert_sort(arr);
// console.log(arr);
// const arr2 = [2, 1, 6, 3, 5, 4, 0, 9, 7];
// insert_sort(arr2);
// console.log(arr2);


/******  冒泡排序  ******/
//


// const arr = [6, 8, 3, 2, 7, 0];
// bubble_sort(arr);
// console.log(arr);

/******  合并排序  ******/


// var A = [1, 3, 7, 9, 2, 4, 6, 8];
// merge(A, 0, 4, 8);
// console.log(A);


//
// let A = [1, 4, 6, 9, 2, 4, 0, 7];
// merge_sort(A, 0, 8);
// console.log(A);

/******  快速排序  ******/
// 快速排序就是找中心点

// const arr1 = [10, 50, 30, 90, 40, 80, 70];  //
// const arr2 = [10, 50, 30, 90, 40, 80, 70];  //
// partition(arr1, 0, 7);
// partition(arr2, 0, 3);
// console.log(arr1, arr2)

/**
 *
 * @param arr
 * @param lo
 * @param hi
 */
//


// const arr3 = [10, 50, 30, 90, 40, 80, 70];
// quick_sort(arr3, 0, 7);
// console.log(arr3);


/***** 计数排序 ******/



// const A = [6, 0, 6, 5, 3, 3, 2, 2, 1, 7, 7, 7];
// console.log(counting_sort(A));

/******  基数排序  ******/

// let arr = [10, 23, 34, 78, 345, 234, 435, 24]
// radix_sort(arr);
// console.log(arr)

/******  桶排序  ******/


// let arr = [23, 45, 12, 67, 90, 46, 7, 8, 56, 57, 43, 75, 97, 89, 86, 88 ]
//
// console.log(bucket_sort(arr, 10, 10))


/******  八皇后问题  ******/
// // 1. 保证棋盘上的两个皇后不能相互攻击，如果不能相互攻击就返回 true
// function compatible(p, q, n) {
//     const [x1, y1] = [~~(p / n), p % n];
//     const [x2, y2] = [~~(q / n), q % n];
//
//     return x1 !== x2 && y1 !== y2 &&
//         (Math.abs(x1 - x2)) !== (Math.abs(y1 - y2))
// }
// // 2. 判断一组决策是不是最终答案
// function is_goal(n, decisions) {
//     for(let i = 0; i < n; i++) {
//         for(let j = i + 1; j < n; j++) {
//             // if(i === j) { continue }
//             if(!compatible(decisions[i], decisions[j], n)) {
//                 return false
//             }
//         }
//     }
//     return true;
// }
// // 3. 主函数，求出所有可能的解
// function queen(n, decisions = [], hset={}) {
//     if(decisions.length === n) {
//         decisions.sort((a, b) => a - b);
//         const hash = decisions.join('-');
//         if(hset[hash]) { return [] };
//         hset[hash] = 1;
//         return  is_goal(n, decisions) ? [decisions] : []
//     }
//
//     let r = [];
//     for(let i = 0; i < n*n; i++) {
//         if(decisions.indexOf(i) === -1) {

//              // concat 是返回一个新数组，不修改原数组
//             r = r.concat( queen(n, decisions.concat(i), hset))
//         }
//
//     }
//     return r;
// }


// // 1. 判断两个皇后不能相互攻击
// function compatible(p, q, n) {
//     const [x1, y1] = [~~(p / n), p % n];
//     const [x2, y2] = [~~(q / n), q % n];
//
//     return x1 !== x2 && y1 !== y2 &&
//         Math.abs(x1 - y1) !== Math.abs(x2 - y2)
// }
//
// // 2. 判断 decisions 里面的皇后能不能相互攻击，也就是一个决策里面的皇后是不是最终结果
// // 优化 2.0 版本 就不用这个函数了
// function is_goal(n, decisions) {
//     for(let i = 0; i < n; i++) {
//         for(let j = i + 1; j < n; j++) {
//             if(!compatible(i, j, n)) {
//                 return false
//             }
//         }
//     }
//     return true;
// }
//
// // 3. 主函数，注意要去重
// function queen(n, decisions = []) {
//     if(decisions.length === n) {
//         return [decisions]
//     }
//
//     let r = [];
//     let start = decisions[decisions.length - 1] || -1
//     for(let i = start + 1; i < n * n; i++) {
//         if(decisions.every(j => compatible(i, j, n))) {
//             r = r.concat(queen(n, decisions.concat(i)));
//         }
//     }
//     return r;
// }


// // 1. 先判断两个皇后是否相互冲突
// function compatible(p, q, n) {
//     const [x1, y1] = [~~(p / n), p % n];
//     const [x2, y2] = [~~(q / n), q % n];
//
//     return x1 !== x2 && y1 !== y2 &&
//         Math.abs(x1 - y1) !== Math.abs(x2 - y2)
// }
//
// // 2. 写主函数，注意去重
// function queen(n, decisions = []) {
//     if(decisions.length === n) {
//         return [decisions]
//     }
//
//     let r = [];
//     let start = decisions[decisions.length - 1] || -1;
//     for(let i = start + 1; i < n * n; i++){
//         if(decisions.every(j => compatible(i, j, n))) {
//             r = r.concat(queen(n, decisions.concat(i)))
//         }
//     }
//     return r;
// }
//



// console.log(queen(4));


/******  实现单向链表  ******/
// function ListNode(key) {
//     this.key = key;
//     this.next = null;
// }
//
// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.length = 0;
//     }
//
//     add(node) {
//         if (this.head !== null) {
//             node.next = this.head;
//         }
//         this.head = node;
//         this.length++;
//     }
//
//     get(i) {
//         let p = this.head;
//         let j = 1;
//         while (p.next && j < i) {
//             p = p.next;
//             j++;
//         }
//         return p ? p.key : null;
//     }
//
//     insert(i, node) {
//         let p = this.head;
//         let j = 1;
//         while (p.next && j < i) {
//             p = p.next;
//             j++;
//         }
//
//         if (p) {
//             node.next = p.next;
//             p.next = node;
//             this.length++;
//         } else {
//             throw error;
//         }
//     }
//
//     size() {
//         return this.length;
//     }
//
//     delete(i) {
//         if(i > this.length) {
//             throw error;
//         }
//         this.length--;
//         // 找到要删除的节点前面的节点
//         let p = this.head;
//         let j = 1;
//
//         if(i === 1) {
//             this.head = p.next;
//             return
//         }
//
//         while (p.next && j < i-1) {
//             p = p.next;
//             j++;
//         }
//
//         let q = p.next;
//         p.next = q.next;
//
//     }
//
// }
//
//
// let node1 = new ListNode(1);
// let node2 = new ListNode(2);
// let node3 = new ListNode(3);
// let node4 = new ListNode(4);
//
// let linkedList = new LinkedList();
//
// linkedList.add(node1);
// linkedList.add(node2);
// linkedList.add(node3);
//
// linkedList.insert(2, node4);
//
// // console.log(linkedList);
// console.log('get node', linkedList.get(1));
// console.log('delete node', linkedList.delete(1));
// console.log(linkedList);


/* 循环链表 */
//

/* 实现栈结构 */


/*****  实现循环队列结构 *****/
class Queue {
    constructor(max) {
        this.data = Array(max);
        this.max = max;
        this.length = 0;
        this.f = 0;
        this.r = 0;
    }

    enqueue(item) {
        if(this.length === this.max) {
            throw 'queue overflow'
        }
        this.length++;
        this.data[this.r] = item;
        this.r++;
        if(this.r === this.max) {
            this.r = 0;
        }
    }

    dequeue() {
        if(this.length === 0) {
            throw 'queue underflow'
        }
        let ret = this.data[this.f];
        this.f++;
        this.length--;
        if(this.f === this.max) {
            this.f = 0;
        }
        return ret;
    }
}
/** 实现一个单链表 **/
// function Node(key) {
//     this.key = key;
//     this.next = null;
// }
//
// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.length = 0;
//     }
//
//     add(node) {
//         if(this.head) {
//             node.next = this.head;
//         }
//         this.head = node;
//         this.length++;
//     }
//
//     insert(i, node) {
//
//         let p = this.head;
//         let j = 1;
//         while(p.next && j < i) {
//             p = p.next;
//             j++;
//         }
//         if(p) {
//             node.next = p.next;
//             p.next = node;
//             this.length++;
//         } else {
//             throw error;
//         }
//
//     }
//
//     get(i) {
//         if(i > this.length) {
//             throw 'i 不在链表长度范围内'
//         }
//         let p = this.head;
//         let j = 1;
//         while(p.next && j < i) {
//             p = p.next;
//             j++;
//         }
//         return p ? p.key : null;
//     }
//
//     delete(i) {
//         let p = this.head;
//         let j = 1;
//         this.length--;
//         if(i === 1) {
//             this.head = this.head.next;
//             return
//         }
//         while(p.next && j < i - 1) {
//             p = p.next;
//             j++;
//         }
//         p.next = p.next.next;
//     }
//
//     reverse(p = this.head) {
//         if(p.next) {
//             this.reverse(p.next);
//             p.next.next = p;
//             p.next = null;
//         } else {
//             this.head = p;
//         }
//     }

// }
//
// let node1 = new Node(1);
// let node2 = new Node(2);
// let node3 = new Node(3);
// let node4 = new Node(4);
//
// let linedList = new LinkedList();
//
// linedList.add(node4);
// linedList.add(node3);
// linedList.add(node2);
// linedList.add(node1);
//

/* 实现双向链表 */
// function Node(key) {
//     this.key = key;
//     this.next = null;
//     this.front = null;
// }
//
// class DoubleList {
//     constructor() {
//         this.head = null;
//         this.length = 0;
//     }
//
//     add(node) {
//         this.length++;
//         if(this.head) {
//             this.head.front = node;
//             node.next = this.head;
//         }
//         this.head = node;
//     }
//
//
// }
