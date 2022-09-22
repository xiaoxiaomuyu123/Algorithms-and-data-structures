/*
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
 */

function Initials(name) {
    let nameArr = name.split(' ');
    let letterArr = nameArr.map(item => {
        return item.substr(0, 1).toUpperCase();
    })
    return letterArr.join('.')
}

console.log("first", Initials('Sam Harris'))

/*
 slice()  substr()  substring() 返回子字符串，接收一个或者两个参数，第一个参数是切片开始的位置，slice 和 substring 第二个参数是切片的结束的位置，不包含这个位置；substr 是切片的个数
 */