/*
Simple, remove the spaces from the string, then return the resultant string.
 */

function noSpace(x){
    return x.replace(/\s*/g, '')
}


/*
  1. x.trim();  只能去掉两端的空格，不能去掉字符串里面所有的空格
 */