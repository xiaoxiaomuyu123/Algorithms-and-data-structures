/*

Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string


 */

function fakeBin(x) {
    let str = x + '';
    let strArr = [...str];
    let numberArr = strArr.map(item => {
        item = item * 1
        if(item < 5) {
            item = 0;
        } else {
            item = 1;
        }
        return item
    });
    let result = numberArr.join('')
    return result
}

console.log("first", fakeBin('45385593107843568'))