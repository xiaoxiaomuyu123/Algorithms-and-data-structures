// function insert(A, x) {
//     // 找到这个升序数组中第一个比 b 大的数字
//     const b = A.find(element => element > x);
//     if(b === undefined) {
//         A.push(x);
//     } else {
//         const indexb = A.indexOf(b);
//         A.splice(indexb, 0, x)
//     }
//     return A;
// }

// 第 4 到 8 行的代码可以优化一下

// function insert(A, x) {
//     const b = A.find(element => element > x);
//     const indexb = A.indexOf(b);
//     A.splice(indexb === -1 ? A.length : indexb, 0, x)
//     return A;
// }

// 16 到 17 行还可以在优化一下：

// function insert(A, x) {
//     const indexb = A.findIndex(element => element > x);
//     A.splice(indexb === -1 ? A.length : indexb, 0, x);
//     return A;
// }


/****** 非 JS 的原始实现 *******/

// function insert(A, x) {
//     // p 指向下一个需要和 x 比较的元素的索引，p+1 指向空位
//     let p = A.length - 1;
//     while(p >= 0 && A[p] > x) {
//         A[p+1] = A[p];
//         p--;
//     }
//     A[p+1] = x;
//     return A;
// }
//
// console.log(insert([2, 3, 5, 7, 9, 13], 8))


/***** 整个插入排序的过程，就是把一个无序数组用插入排序的方法，变成一个升序数组*****/
function insert(A, i, x) {
    let p = i - 1;
    while(p >= 0 && A[p] > x) {
        A[p+1] = A[p];
        p--;
    }
    A[p+1] = x;
}

function insert_sort(A) {
    for(let i = 1; i < A.length; i++) {
        insert(A, i, A[i])
    }
}
const A = [2, 1, 6, 3, 5, 4]
insert_sort(A)
console.log(A)