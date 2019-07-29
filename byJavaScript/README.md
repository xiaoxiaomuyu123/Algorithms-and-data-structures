## 基础概念
- 数量级
- 算法输入
- 算法输出

## 二分查找
- 文字描述算法的流程：假设要在一个数组中查找一个数字 x   
    1. 这个数组必须是有序的，这里假设是升序排列。
    2. 找到这个数组中间的数字 a，让 a 和 x 比较
        - a > x，说明 x 在 a 的 左边
        - a < x，说明 x 在 a 的右边
    3. 在未查找的部分继续 2 的步骤，直到最终找到结果，就返回该值得索引，找不到，就返回 -1。      
    **这个过程的关键点：**
        - 循环不变式：循环之前关键变量是什么，满足什么样的条件，循环之后关键变量有满足什么样的条件。
        - 在这里，关键就是如何找到未查找部分的数组的中间值的索引。
            1. 循环前：left 是查找范围的左边界，right 是查找范围的右边界，m 是未查找范围中间数的索引。因为 m 是索引值，所以 m 的计算方式是 左边界加右边界的1/2，再向下取整。
            2. 循环后，之前的 m 就可以通过 加一或者减一 得出下一次循环的左边界或者右边界。具体加一还是减一，由 a 和 x 的关系得出。
                - a > x，下一次要查找左边的，那么，新的右边界 right = a - 1；
                - a < x，下一次要查找右边的，那么，新的左边界 left = a + 1；
- 查询规模和时间的关系  
一个数 N 除以多少次 2 可以等于 1。  
次数 n = log(N)   以 2 为底数，结果用去尾法（向下取整），再加一。可以提升查找效率。
- 问题抽象：   
`function bsearch(A, x)`    
A: 数组  
x: 需要查找的值
返回：x 在 A 中的位置，不存在就返回 -1   

## 插入排序
- 排序的应用场景：  
购物车订单，搜索引擎的结果。
- 插入排序的算法：  
原数组是有序的，新的元素插入到之前的数组中。也就是，如何在有序的数组中插入一个新值。假设这个数组是升序排列[2, 4, 7, 9, 13]，要新插入的数字是 8  
    - 8 先和 13 比较，13 比 8 大，所以 13 要向右移动一位；
    - 8 再和 9 比较，9 比 8 大，所以 9 要向右移动一位；
    - 8 再和 7 比较，7 比 8 小，8 就放在这个位置；
- 问题抽象：   
`function insert(A, x)`  
A : 已排序的数组
x : 需要插入的元素
返回值：无
- JavaScript 的原始实现，但通常不是最优的解决方式
```
function insert(A, x) {
    // 找到这个升序数组中第一个比 b 大的数字
    const b = A.find(element => element > x);
    if(b === undefined) {
        A.push(x);
    } else {
        const indexb = A.indexOf(b);
        A.splice(indexb, 0, x)
    }
    return A;
}
```
- push 和 splice 还可以在优化一下：
```
function insert(A, x) {
    const b = A.find(element => element > x);
    const indexb = A.indexOf(b);
    A.splice(indexb === -1 ? A.length : indexb, 0, x)
    return A;
}
```
- 查找有序数组中第一个比 x 大的输的索引可以直接用 findIndex（）    
```
function insert(A, x) {
    const indexb = A.findIndex(element => element > x);
    A.splice(indexb === -1 ? A.length : indexb, 0, x);
    return A;
}
```
