/*

Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

 */

function countPositivesSumSumNegatives(input) {
    if(Array.isArray(input) && input.length) {
        let positivesArr = input.filter(item => item > 0);
        let negativesArr = input.filter(item => item < 0);
        let count = positivesArr.length;
        let sum = negativesArr.reduce((pre, cur) => pre + cur, 0 )
        return [count, sum]
    } else {
        return []
    }
}

console.log(countPositivesSumSumNegatives([]))