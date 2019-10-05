/*

写一个函数判断字符串中x的数量和o的数量是否相等（忽略大小写）：
XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // 没有x也没有o，所有相等，都为0
XO("zzoo") => false

*/

function XO(str){
    let arr = str.toLowerCase().split("");
    var i = 0,
        j = 0;
    arr.forEach(item => {
        if(item === 'x') {
            i++;
        } else if(item === "o") {
            j ++;
        }

    });
    if(i === j) {
        return true;
    } else {
        return false;
    }
}

// console.log(XO("ooxx")); // true
// console.log(XO("xooxx"));// false
// console.log(XO("ooxXm")); // true
// console.log(XO("zpzpzpp")); // true // 没有x也没有o，所有相等，都为0
// console.log(XO("zzoo")); // false

/* 优化代码 2 */
// 提交试用
// function XO2(str) {
//     let arr = str.toLowerCase().split(""),i = 0, j = 0;arr.forEach(s=>{if(s === "x"){i++}if(s === "o"){j++}});return i === j
// }

function XO2(str) {
    let arr = str.toLowerCase().split(""),
        i = 0, j = 0;
    arr.forEach(s=>{
        if(s === "x")  {i++};
        if(s === "o")  {j++};
    });
    return i === j;
}

// console.log(XO2("ooxx")); // true
// console.log(XO2("xooxx"));// false
// console.log(XO2("ooxXm")); // true
// console.log(XO2("zpzpzpp")); // true // 没有x也没有o，所有相等，都为0
// console.log(XO2("zzoo")); // false

/* 优化代码 3 使用正则表达式*/
function XO3(str) {
    // g ：表示全局模式，该模式会应用所有的字符串，而不是发现第一个匹配项就停止
    // i ： 表示不区分大小写
    return (str.match(/x/ig) || []).length === (str.match(/o/ig) || []).length
}

// console.log(XO3("ooxx")); // true
// console.log(XO3("xooxx"));// false
// console.log(XO3("ooxXm")); // true
// console.log(XO3("zpzpzpp")); // true // 没有x也没有o，所有相等，都为0
// console.log(XO3("zzoo")); // false

