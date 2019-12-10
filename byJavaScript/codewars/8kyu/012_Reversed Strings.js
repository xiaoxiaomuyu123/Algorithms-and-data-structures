/*
Complete the solution so that it reverses the string value passed into it.

solution('world'); // returns 'dlrow'
 */

function solution(str){
    let s = str.split("").reverse().join("");
    return s;
}

console.log(solution('world'));