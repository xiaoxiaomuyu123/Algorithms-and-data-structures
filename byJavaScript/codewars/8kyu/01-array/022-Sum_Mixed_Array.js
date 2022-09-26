/*

Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.



 */

function sumMix(x){
    let result = x.reduce((pre, cur) => {
        return pre + cur * 1
    }, 0)
    return result
}