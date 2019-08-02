/*
accum("abcd");    // "A-Bb-Ccc-Dddd"
accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt");    // "C-Ww-Aaa-Tttt"
accum("") // ""

 */

function accum(str) {
//  观察得知和每个字母的索引有关，字符串没有 str[i] = "a" 的方法，我能想到的就是把字符串转换成数组
//  字符串转换成数组的方法用 split
    // 把字符数转成数组
    var strToArr = str.split('');
    let arr1 = [];
    for(let i = 0; i < strToArr.length; i++) {
        let arr2 = [];
        for(let j = i + 1; j > 0; j--){
            arr2.push(strToArr[i].toLowerCase());
        }
        arr2[0] = arr2[0].toUpperCase();
        arr1.push(arr2.join(''))
    }
    return arr1.join("-")
}
// var a = accum("abcd");
// var b = accum("RqaEzty");
// var c = accum("cwAt");
// var d = accum("");
// console.log(a, b, c, d)

/*** 上面的代码不够简洁  ***/

// 注意 再使用 数组的 map 方法的时候，必须 return 每个元素处理结果的内容，否则不出结果。因为这个函数不会自动 return
// function accum2(str) {
//     var arr = str.split("").map((element, index) => {
//         return element.toUpperCase() + element.toLowerCase().repeat(index)
//     })
//     return arr.join("-");
// }

function accum2(str) {
    return str.split("").map((element, index) => {
        return element.toUpperCase() + element.toLowerCase().repeat(index)
    }).join("-")
}

var a = accum2("abcd");
var b = accum2("RqaEzty");
var c = accum2("cwAt");
var d = accum2("");
console.log(a, b, c, d)