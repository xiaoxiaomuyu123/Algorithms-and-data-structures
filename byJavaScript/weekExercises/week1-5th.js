/*
数组展平

写一个函数flat展平一个数组

flat([1,[2,'a',[5,6]],8]) // [1,2,'a',5,6,8]
falt(['x', [[[['y']]]]]) // ['x', 'y']
falt([',',[''], ',']) // [',', '', ',']

*/

/************* 方法一：递归加 push 实现  **************/
// function flat(arr) {
//     let arr1 = [];
//     for (let i = 0; i < arr.length; i++) {
//         if(typeof arr[i] === "object") {
//             arr1.push(...flat(arr[i]))
//         } else {
//             arr1.push(arr[i]);
//         }
//     }
//     return arr1;
// }

// 用递归和 数组的 concat() 方法
// function flat(arr) {
//    let arr1 = [];
//    arr.forEach(item => {
//        if(item instanceof Array) {
//            arr1 = arr1.concat(flat(item))
//        } else {
//            arr1.push(item);
//        }
//    })
//     return arr1;
// }



console.log(flat([1,[2,'a'],8])) // [1,2,'a',5,6,8]
console.log(flat([1,[2,'a',[5,6]],8])) // [1,2,'a',5,6,8]
console.log(flat(['x', [[[['y']]]]])) // ['x', 'y']
console.log(flat([',',[''], ','])) // [',', '', ',']
