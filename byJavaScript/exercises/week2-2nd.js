/*
题目2:数组旋转

定义数组的旋转操作rotate(A, amount)，让数尾部amount个元素移动到头部。

例如数组: A=[1,2,3,4,5,6,7]

const A1=[1,2,3,4,5,6,7]
const A2=[1,2,3,4,5,6,7]
const A3=[1,2,3,4,5,6,7]
rotate(A1, 1)
rotate(A2, 2)
rotate(A3, 3)

// A1 =  [7,1,2,3,4,5,6]
// A2 =  [6,7,1,2,3,4,5]
// A3 = [5,6,7,1,2,3,4]
// 依此类推
 */

// 这样思维量简单，但是新建了 3 个数组空间
// function rotate(arr, amount) {
//     let arr1 = arr.slice(0, arr.length - amount);
//     let arr2 = arr.slice(arr.length - amount);
//     return arr2.concat(arr1);
// }

/********** 尝试用一个数组空间来做 *********/
// 数组的 splice 方法返回的是 被删除的数组项，如果没有被删除的项，就但会空数组
function rotate(arr, amount) {
    let arr1 = arr.splice(arr.length - amount, amount);
    arr.splice(0, 0, ...arr1);
    return arr
}


const A1=[1,2,3,4,5,6,7]
const A2=[1,2,3,4,5,6,7]
const A3=[1,2,3,4,5,6,7]
console.log(rotate(A1, 1))
console.log(rotate(A2, 2))
console.log(rotate(A3, 3))