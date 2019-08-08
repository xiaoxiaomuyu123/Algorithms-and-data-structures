/*
题目1:数组反转

写一个函数reverse，反转一个数组。不可以使用reverse函数

reverse([3,2,1]) // [1,2,3]

 */

function reverse(arr) {
    let arr1 = [];
    for(let i = arr.length - 1; i >= 0; i--) {
        arr1.push(arr[i]);
    }
    return arr1;
}

console.log(reverse([3, 2, 1]))