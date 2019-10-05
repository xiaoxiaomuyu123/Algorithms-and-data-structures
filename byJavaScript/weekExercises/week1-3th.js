/*
找到特别值:
在一个数组中大部分都是奇数(或偶数），只有1个可能是偶数（或奇数），写一个函数special找到这个不一样的值。

special( [2, 4, 0, 100, 4, 11, 2602, 36] ) // 11 唯一的奇数

special( [160, 3, 1719, 19, 11, 13, -21] ) // 160 唯一的偶数
*/

function special(arr) {
    let arr1 = arr.filter(item => item % 2 === 0);
    let arr2 = arr.filter(item => item % 2 === 1);
    if(arr1.length < arr2.length) {
        return arr1[0];
    } else {
        return arr2 [0];
    }
}

// console.log(special( [2, 4, 0, 100, 4, 11, 2602, 36] )) // 11 唯一的奇数
// console.log(special( [160, 3, 1719, 19, 11, 13, -21] )) // 160 唯一的偶数


function special2(arr) {
    let arr1 = arr.filter(item => item % 2 === 0);
    let arr2 = arr.filter(item => item % 2 === 1);
    // return arr1.length < arr2.length ? arr1[0] : arr2[0];
    return arr1.length === 1 ? arr1[0] : arr2[0];
}

console.log(special2( [2, 4, 0, 100, 4, 11, 2602, 36] )) // 11 唯一的奇数
console.log(special2( [160, 3, 1719, 19, 11, 13, -21] )) // 160 唯一的偶数