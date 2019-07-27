/*
题目：给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。
示例 1:

输入: "Let's take LeetCode contest"
输出: "s'teL ekat edoCteeL tsetnoc"

注意：在字符串中，每个单词由单个空格分隔，并且字符串中不会有任何额外的空格。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/reverse-words-in-a-string-iii
 */

function stringReverse(str) {
    // 字符串的 split 方法可以把字符串转换为数组，以传入的参数为分隔符进行分隔
    // 因为题目中的单词是空格分隔，所以传入的参数是空格，返回的是一个数组
    // var strToarr = str.split(" ");
    // split() 方法里面也可以传入 正则表达式。
    var strToArr = str.split(/\s/g);

    var arrReverse = strToarr.map(item => {

        // 数组才有 reverse 方法，item 是字符串，要转成数组,才能使用 reverse 方法。
        // reverse 会改变原来的数组，不会创建新的数组
        var itemToArr = item.split('');

        itemToArr.reverse();

        // map 方法要有返回值的，没有返回值的话，arrReverse 就会变成 undefined
        return itemToArr.join("")

    })
    var result = arrReverse.join(" ");
    return result;
}

stringReverse("Let's take LeetCode contest");

// 方法二：不用 split 提取字符串的单词转成数组，直接用正则的 match 来进行提取单词返回数组

function stringReverse(str) {

    var strToArr = str.match(/[\w']+/g);

    var arrReverse = strToarr.map(item => {

        // 数组才有 reverse 方法，item 是字符串，要转成数组,才能使用 reverse 方法。
        // reverse 会改变原来的数组，不会创建新的数组
        var itemToArr = item.split('');

        itemToArr.reverse();

        // map 方法要有返回值的，没有返回值的话，arrReverse 就会变成 undefined
        return itemToArr.join("")

    })
    var result = arrReverse.join(" ");
    return result;
}