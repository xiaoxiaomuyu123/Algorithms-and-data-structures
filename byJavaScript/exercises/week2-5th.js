/*
先增后减序列求最大值

写一个函数peak，给定一个整数数组，该数组一开始是单调递增的，然后是单调递减的，
求该数组的最大值。输入递增、递减是单调的，没有连续一样的值，比如没有这种情况： [1,2,2,1]。

peak([8, 10, 20, 80, 100, 200, 400, 500, 3, 2, 1]) // 500
peak([120, 100, 80, 20, 0]) // 120
peak([0, 20, 48, 80]) // 80
peak([1]) // 1


 */

/*** 方法一：插入排序，取最后一个 缺点，执行的时间太长**/
// function insert(arr, i, x) {
//     let p = i - 1;
//     while(p >= 0 && arr[p] > x) {
//         arr[p+1] = arr[p];
//         p--;
//     }
//     arr[p+1] = x;
// }
//
// function insert_sort(arr) {
//     for(let i = 1; i < arr.length; i++) {
//         insert(arr, i, arr[i])
//     }
// }
//
// function peak(arr) {
//     insert_sort(arr);
//     return arr[arr.length - 1];
// }

/**  方法二 **/
/*
可以转换为二分查找

    如果猜测元素比左右两边都大->找到了最终结果
    如果比左边大， 比右边小 -> 结果在右边
    如果比右边大， 比左边小 -> 结果在左边

 */
// function peak(arr) {
//     let left = 0,
//         right = arr.length,
//         guess;
//     while(left <= right) {
//         guess = Math.floor((left + right) / 2);
//         if(guess === arr.length - 1 || guess === 0) {
//             return arr[guess];
//         }
//         if(arr[guess] > arr[guess+1]) {
//             if(arr[guess] > arr[guess-1]) {
//                 return arr[guess];
//             } else {
//                 right = guess - 1;
//             }
//         } else {
//             left = guess + 1;
//         }
//     }
// }

function peak(arr) {
    let left = 0,
        right = arr.length - 1,
        guess;
    while(left <= right) {
        guess = Math.floor((left + right) / 2);
        if(left === right) {
            return arr[left];
        }
        if(arr[guess] < arr[guess+1]) {
            left = guess + 1;
        } else {
            right = guess;
        }
    }
}


console.log(peak([8, 10, 20, 80, 100, 200, 400, 500, 3, 2, 1])) // 500
console.log(peak([120, 100, 80, 20, 0])) // 120
console.log(peak([0, 20, 48, 80])) // 80
console.log(peak([1])) // 1