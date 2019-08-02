/*
数组展平

写一个函数flat展平一个数组

flat([1,[2,'a',[5,6]],8]) // [1,2,'a',5,6,8]
falt(['x', [[[['y']]]]]) // ['x', 'y']
falt([',',[''], ',']) // [',', '', ',']

*/

function flat(arr) {
    let arr1 = [];
    for (let i = 0; i < arr.length; i++) {
        if(typeof arr[i] === "object") {
            arr1.push(...flat(arr[i]))
        } else {
            arr1.push(arr[i]);
        }
    }
    return arr1;
}

console.log(flat([1,[2,'a'],8])) // [1,2,'a',5,6,8]
console.log(flat([1,[2,'a',[5,6]],8])) // [1,2,'a',5,6,8]
console.log(flat(['x', [[[['y']]]]])) // ['x', 'y']
console.log(flat([',',[''], ','])) // [',', '', ',']
