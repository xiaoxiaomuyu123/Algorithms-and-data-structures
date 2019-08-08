/*
最大整数幂

写一个函数floor_power_of2，求比x小的最大二的整数次幂。

    x >= 0 && x < Math.pow(2, 31) - 1

提示

    位运算

例如

floor_power_of2(64) // 64
floor_power_of2(63) // 32
floor_power_of2(33) // 32
floor_power_of2(32) // 32


 */

/****  执行的时间太长  ******/
// function floor_power_of2(n) {
//     let result,
//         i = Math.ceil(Math.sqrt(n));
//         m = 1;
//     for(let j = 1; j <= i; j++) {
//         result = m;
//         m = 2 * m;
//
//         if(m > n) {
//             return result;
//         } else if(m === n) {
//             return m;
//         }
//     }
// }

/****  优化执行时间的版本  ******/
function floor_power_of2() {
    
}


console.log(floor_power_of2(64)) // 64
console.log(floor_power_of2(63)) // 32
console.log(floor_power_of2(33)) // 32
console.log(floor_power_of2(32)) // 32