/***  合并两个数组 ***/
// 方法一：插入排序
// function insert(arr, i, x) {
//     let p = i - 1;
//     // p 指向下一个和 x 比较的位置
//     // p+1 指向空位
//     while(p >=0 && arr[p] > x) {
//         arr[p+1] = arr[p];
//         p--
//     }
//     arr[p+1] = x;
// }
//
// function insert_sort(arr) {
//     for (let i=1; i < arr.length; i++) {
//         insert(arr, i, arr[i])
//     }
// }
//
// const arr = [2, 3, 1, 5, 4];
// insert_sort(arr);
// console.log(arr)

// 方法二：使用 Array.sort() 方法，但这个方法会调用每个数组项的 toString（）方法，比较的是数字的字符串形式
// 所以要进行改变一下下。sort（）可以接受一个比较函数作为参数。这个比较函数接收两个参数，如果第一个参数应该位于
// 第二个参数之前，就返回负数，否则就返回正数，相等就返回 0。
// function compare(v1, v2) {
//     return v1-v2;
// }
//
// function mysort(arr) {
//     arr.sort(compare);
// }
// mysort(arr);
// console.log(arr)

// function merge(arr, p, q, r) {
//
//     // 将 arr 分成 arr1=[p, q) 和 arr2=[q, r) 两个数组，
//     // 这样分刚好 slice（a， b）也是包含左边不包含右边的
//     var arr1 = arr.slice(p, q);
//     var arr2 = arr.slice(q, r);
//     arr1.push(Number.MAX_SAFE_INTEGER);
//     arr2.push(Number.MAX_SAFE_INTEGER);
//     for(let k = p, i = 0, j = 0; k < r; k++) {
//         // 循环不变式
//         // k ：代表 arr 中下一个回写的位置
//         // i ：代表 arr1 中要比较的数字
//         // j ： 代表 arr2 中要比较的数字
//         arr[k] = arr1[i] < arr2[j] ? arr1[i++] : arr2[j++]
//     }
// }

// const A = [1, 3, 5, 2, 4, 6];
// const B = [2, 4, 6, 1, 3, 5];
// const C = [2, 1];
// merge(A, 0, 3,6)
// merge(B, 0, 3,6)
// merge(C, 0, 1,2)
// console.log(A)
// console.log(B)
// console.log(C)

/***  归并排序 ****/

function merge(arr, p, q, r) {
    console.log("p=", p, "q=", q, "r=", r)
    var arr1 = arr.slice(p, q);
    var arr2 = arr.slice(q, r);
    arr1.push(Number.MAX_SAFE_INTEGER);
    arr2.push(Number.MAX_SAFE_INTEGER);
    for(let k = p, i = 0, j = 0; k < r; k++) {
        // 三元表达式后面的 arr1[i++] 应该是 先执行 arr1[i]，再执行 i++ 操作
        arr[k] = arr1[i] < arr2[j] ? arr1[i++] : arr2[j++];
    }
}

function merge_sort(arr, p, r) {
    if(r - p < 2) { return }
    let q = Math.ceil((r+p) / 2);
    merge_sort(arr, p, q);
    merge_sort(arr, q, r);
    merge(arr, p, q, r);
}

const arr = [3, 1, 5, 8, 6, 9];
merge_sort(arr, 0, 5);
console.log(arr)