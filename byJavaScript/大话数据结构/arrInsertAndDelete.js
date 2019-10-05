/******   顺序存储结构的插入与删除   **********************/

/*****  1. 在数组 arr 中的 i 位置插入元素 x *****/
function insertArr_v1(arr, x, i) {
    let length = arr.length;
    // 使用浅拷贝不行，修改 arr0 依旧会修改 arr，所以使用深拷贝将 arr 深拷贝到 arr0
    // let arr0 = arr;
    let arr0 = JSON.parse(JSON.stringify(arr));
    for(let k = i; k < length; k++) {
        let j = k;
        arr[j + 1] = arr0[k];
    }
    arr[i] = x;
    return arr;
}

// _v1 版本还要深拷贝，增加了一倍的空间复杂度，不好不好。_v2 版本的思路和 _v1 相反，从最后一位进行遍历
function insertArr_v2(arr, x, i) {
    let length = arr.length;
    if(i > length) {return console.log('溢出')}
    if(i === (length + 1)) {
        arr[i] = x;
        return arr;
    }
    for(let k = length; k <= i; k--) {
        let j = k;
        arr[j + 1] = arr[k];
    }
    arr[i] = x;
    return arr;
}

// let arr = [1, 2, 3];
// console.log(insertArr_v1(arr, 0, 0));
// console.log(insertArr_v2(arr, 0, 0));
// console.log(insertArr_v2(arr, 1, 4));
// console.log(insertArr_v2(arr, 5, 5));

/*****  2. 在数组 arr 中的 i 位置删除元素 x *****/
// 删除应该是正向遍历
function deleteArr(arr, i) {
    let length = arr.length;
    if(i > length) { return console.log('删除的位置不存在')}
    for(let k = i; k < length; k++) {
        let j = k;
        arr[k] = arr[j+1];
    }
    arr.length = length - 1;
    return arr;
}
// let arr = [0, 1, 2, 3, 4, 5, 6];
// console.log(deleteArr(arr, 0));
// console.log(deleteArr(arr, 2));
// console.log(deleteArr(arr, 2));
// console.log(deleteArr(arr, 9));