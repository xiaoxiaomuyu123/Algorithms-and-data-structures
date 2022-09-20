/*
todo 有必要重新做，注意边界条件
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.

 */

// function positiveSum(arr) {
//     let arr2 = arr.filter((item) => {
//         return item >= 0
//     })
//     console.log(arr2)
//     if(arr2.length){
//         return arr2.reduce((pre, cur) => pre + cur)
//     } else {
//         return 0
//     }
// }

// todo reduce 初始值 https://segmentfault.com/a/1190000039264226
function positiveSum(arr) {
    return arr.filter(item => item >= 0).reduce((pre, cur) => pre + cur, 0)
}


console.log(positiveSum([-1,-2,-3,-4,-5]))

let arrTwo = [11, 22, 33]
arrTwo.reduce((cur, pre, index)=> {
    return cur
}, 0)


// reduce 的高级用法
/*
1. 统计数组里面元素出现的次数
 */

function static(arr) {
   let result = arr.reduce((pre, cur) => {
       // 判断对象里面是否有某个元素
        if(cur in pre) {
            pre[cur] ++
        } else {
            pre[cur] = 1
        }
        return pre
    }, {})
    return result
    // 要把 result 返回
}

console.log("first", static(['A', 'N', 'M', 'A']))