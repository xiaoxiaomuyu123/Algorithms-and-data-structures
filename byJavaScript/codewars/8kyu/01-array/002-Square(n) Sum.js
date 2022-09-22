/*

Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.


 */

function squareSum(arr) {
    let result = arr.reduce((pre, cur) => {
        return pre + cur * cur
    }, 0)
    return result
}

console.log("first", squareSum([1, 2, 2 ]))