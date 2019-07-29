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

function insert(A, x) {
    const indexb = A.findIndex(element => element > x);
    A.splice(indexb === -1 ? A.length : indexb, 0, x);
    return A;
}

console.log(insert([2, 3, 5, 7, 9, 13], 8))



