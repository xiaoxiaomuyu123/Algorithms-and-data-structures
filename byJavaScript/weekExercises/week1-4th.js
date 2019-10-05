/*
题目：求从1加到n

实现一个函数sum(n)求1加到n

要求：执行时间O(1)

*/

// 这个时间复杂度是 O(n)
function sum(n) {
    let s = 0;
    for(let i = 1; i <= n; i++) {
        s = s + i;
    }
    return s;
}

// console.log(sum(100))

// 等差数列求和
function sum1(n) {
    return ((1 + n) * n)/2
}

console.log(sum1(100));