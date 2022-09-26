/*

Create a function with two arguments that will return an array of the first n multiples of x.

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array or list ( depending on language ).

Examples
countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]

 */

function countBy(x, n) {
    let sum = x;
    let z = Array.from({length: n}, (item, index) => {
        if(index === 0) {
            return x
        } else {
            sum = x + sum
            return sum
        }
    })
    
    return z;
}


function countBy(x, n) {
    let z = Array.from({length: n}, (item, index) => {
        return x * (index + 1)
    })
    
    return z;
}