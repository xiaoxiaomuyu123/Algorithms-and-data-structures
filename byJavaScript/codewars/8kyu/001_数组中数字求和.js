/*
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.


Test.describe("Example tests",_=>{
Test.assertEquals(sumMix([9, 3, '7', '3']), 22);
Test.assertEquals(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42);
Test.assertEquals(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41);
});
 */


function sumMix(x){
    let sum = x.map(items => items * 1).reduce((pre, cur) => pre + cur);
    return sum;
}

/*
用到的知识点：
1. 用乘性操作符将字符串转换成数字，相当于使用 Number() 函数进行转换。
2. Number（）和 parseInt（）在字符串转换的区别是：
    * “” 空字符串，Number（）转成 0， parseInt（）转成 NaN
    * “123adf”，number（）转成 NaN，parseInt（）转成 123
    * number（） 将 true，false，null 转成 1， 0， 0；parseInt（）转成 NaN
 */