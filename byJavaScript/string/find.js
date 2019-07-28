/*

    题目：给定一个字符串 s，计算具有相同数量0和1的非空(连续)子字符串的数量，
    并且这些子字符串中的所有0和所有1都是组合在一起的。重复出现的子串要计算它们出现的次数。

    示例 1 :
    输入: "00110011"输出: 6
    解释: 有6个子串具有相同数量的连续1和0：“0011”，“01，“1100”，“10”，“0011” 和 “01”。

    注意：一些重复出现的子串要计算它们出现的次数。另外“00110011”不是有效的子串，因为所有的0（和1）没有组合在一起。s.length 在1到50,000之间。s 只包含“0”或“1”字符。

    示例 2 :
    输入: "10101"
    输出: 4
    解释: 有4个子串：“10”，“01”，“10”，“01”，它们具有相同数量的连续1和0。

* */

// 这个版本没成功，还要再完善
// function find(str) {
//     var result = [];
//     var former = [];
//     var later = [];
//     if(str[0] === str[1]) {
//         var strLength = str.length;
//         former.push(str[0]);
//         former.push(str[1]);
//         for(let i=2; i<strLength; i++) {
//
//         }
//     } else {
//         var str2 = str[0] + str[1];
//         result.push(str2);
//     }
// }



function find(str) {
    var strLength = str.length;

    // 存放之前出现的相同数字的次数
    var pre = 0;

    // 存放现在出现的相同数字的次数
    var cur = 1;

    // 计算符合条件的字符串
    var n = 0;
    for(let i=0; i<strLength-1; i++) {
        if(str[i] === str[i+1]) {

            // 如果相邻的两个数相等，当前数字出现的次数加一
            cur = cur + 1;
        } else {

            // 相邻的两个数不相等，那么现在的数字就变成了之前的数字，新的数字出现的次数要存在 cur 中
            pre = cur;
            cur = 1;
        }
        if(pre >= cur) {
            n = n + 1;
        }
    }
    return n;
}

var n = find("00110011");
console.log(n)