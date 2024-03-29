/*
Your task is to sum the differences between consecutive pairs in the array in descending order.

For example: sumOfDifferences([2, 1, 10]) Returns 9

Descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell).

 */

function sumOfDifferences(arr) {
    let sum = 0;
    arr.sort((a, b) => b - a);
    // array.reduce((pre, cur, index, array) => {
    //     return pre + ();
    // });
    for(let i = 0; i < arr.length - 1; i++) {
        sum = sum + (arr[i] - arr[i + 1])
    }
    return sum;

}

console.log(sumOfDifferences([2, 10, 1]));