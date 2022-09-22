/*

Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0]


 */

function digitize(number) {
    let strArr = (number + '').split('').reverse();
    let numberArr = strArr.map(item => item * 1);
    return numberArr
}

console.log("first", digitize(3455))