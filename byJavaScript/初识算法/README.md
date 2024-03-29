# 一、算法的基础概念   

- 数量级
- 算法输入
- 算法输出

## 1 二分查找   

- 文字描述算法的流程：假设要在一个数组中查找一个数字 x   
    1. 这个数组必须是有序的，这里假设是升序排列。
    2. 找到这个数组中间的数字 a，让 a 和 x 比较
        - a > x，说明 x 在 a 的 左边
        - a < x，说明 x 在 a 的右边
    3. 在未查找的部分继续 2 的步骤，直到最终找到结果，就返回该值得索引，找不到，就返回 -1。      
    **这个过程的关键点：**
        - 循环不变式：循环之前关键变量是什么，满足什么样的条件，循环之后关键变量有满足什么样的条件。
        - 在这里，关键就是如何找到未查找部分的数组的中间值的索引。
            1. 循环前：left 是查找范围的左边界，right 是查找范围的右边界，m 是未查找范围中间数的索引。因为 m 是索引值，所以 m 的计算方式是 左边界加右边界的1/2，再向下取整。要注意，在 left=right 的时候，循环的条件也是成立的，此时 left=right，说明整个数组中要比较的只有一个数字，这个数字就是被猜想值 a。
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
- 分析时间复杂度和空间复杂度：
    - 空间复杂度是 O(1);
    - 最好的情况下时间复杂度是 O(1);
    - 最好的情况下时间复杂度是 O(lgn);
- 代码注意点：  
    - while 循环的条件是 left <= right。这里必须有等于号，否则会查询出错。
    - 比较结束后，left = guess + 1, right = guess + 1。 而不是直接等于 guess。    
    
## 2 插入排序   

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
- **JavaScript 的原始实现**，但通常不是最优的解决方式   

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

- **非JavaScript 的原始实现**
    - 定义一个循环不变式，将要插入的数字 x 和数组的数字比较，从最末端最大的数字开始比较，如果比 x 大，则数组里的这个数字就向后移动一位，直到出现比 x 小的数字出现，那么这个数字的后面就可以插入 x 了。
    - 具体实现：定义一个指针 p，p 指向下一个要比较的数字，p+1 指向腾出来的空位。当 指针 p 指向的数字大于 x 的时候，p 指向的这个数字就要向后移动一位，也就是，移动到 p+1 的位置。当出现比 x 小数字的时候，x 就可以放在 p+1 的位置了。这里设置循环条件的时候，要用 while 不能用 for。   
    
```
    function insert(A, x) {
        let p = A.length - 1;
        while(p >= 0 && A[p] > x) {
            A[p+1] = A[p];
            p--;
        }
        A[p+1] = x;
        return A;
    }
```    
    
- **整个插入排序的方法，也就是把一个无序数组用插入排序的方法变成一个升序数组**
    - 数组 A = [2, 1, 3, 5, 4, 8, 6]。先看前两位，将第一位看成有序数组，第二位和第一位比较
        - 第二位 大于 第一位，那么指针 p+1 就指向第二位。
        - 第二位 小于 第一位，那么指针 p+1 就指向第一位，也就是第一位就向后移动一位。
    - 这样前两个数字就排列好了，再用相同的方法比较第三位，第四位，直至数组的最后一位。
    - 注意：这个时候，p 的开始值就不是 A.length 了，而是 A 的各个 index 值，用 i 来表示。i 的初始值是 1。    
    
```
    function insert(A, i, x) {
        let p = i - 1;
        while(p >= 0 && A[p] > x) {
            A[p+1] = A[p];
            p--;
        }
        A[p+1] = x;
    }

    function insert_sort(A) {
        for(let i = 1; i < A.length; i++) {
            insert(A, i, A[i])
        }
    }
    const A = [2, 1, 6, 3, 5, 4]
    insert_sort(A)
    console.log(A)
```    
    
- 插入排序的执行时间：  
    - 主循环执行的是 N-1 次，也就是 insert_sort(A) 中 for 循环的次数。N 表示 A 的长度。因为 for 循环执行的时间 远远小于 里面的循环体，所以整个函数的执行时间取决于 for 循环里面的 insert(A, i, A[i]) 的执行时间。
    - 现在仔细分析一下 insert(A, i, A[i]) 的执行时间。所以就看 insert 函数里面的 while 循环。while 循环的执行时间不固定，所以分为最好的和最坏的这两种不同的情况去讨论。
        - 最好的情况：每一次 while 循环都是 A[P] < x，这样就不用执行 while 循环，所以总共的循环次数就是 N-1 次。这种情况，原始的 A 就是升序排列。
        - 最坏的情况：while 要循环 i 次，其中（0 < i < N-1）。最后 while 的循环次数是 1 + 2 + 3 + ... + N-1 = N(N-1)/2 = 2/1(N^2 - N)。这种情况 A 就是降序。假如 N = 10000，也就是输入的 A 的数组长度是 10000 的话，那么执行的次数就是 10000*10000/2，速度会很慢。
- 思考：如果使用二分法查找优化插入排序的 insert 过程？速度会变快嘛？代码如何写？

## 3 冒泡排序  

- 文字描述：   
总体上是先确定最大的数字，每一次都得出比较大的数字，给他排好位置。
    - 先比较数组中的前两位开始比较，大的数字向后移动到第二位
    - 再比较第二位和第三位，如果前者比后者大，就交换位置，也就是大的数字向后移动到第三位
    - 再比较第三位和第四位，如果前者比后者大，就交换位置，大的数字向后移动到第四位
    - 这样一直比较，直到最后一位。此时最后一位的数字已经确定。然后开始确定倒数第二大的数字
    - 重复第一步的步骤，找到倒数第二大的数字
    - 不断重复上面的步骤，直到整个数字变成升序排列。
- 问题抽象：  
`function bubble_sort(A)`    
A: 需要排序的数组
返回：无
- 外层循环的循环变量是 i。第一次，i 指向最大的数的位置（数组的最后一位）；第二次，指向第二大的数字的位置，也就是倒数第二位；一直循环到最后，i = 1，比较结束；第 k 次执行循环后，前 k 大的值排列在 i 的位置；每循环一次，A[i] 到 A[n-1] 是已经排好的顺序
- 内层循环的循环变量是 j。j 表示 0-j 元素中最大的值。   

```
function swag(A, i, j) {
    const t = A[i];
    A[i] = A[j];
    A[j] = t;
}

function bubble_sort(A) {
    for(let i = A.length-1; i >= 1; i--) {
        for(let j = 1; j <= i; j++) {
            // && 是“与” 操作，只有前面的条件成立，以为就是判断前面的的语句为真的时候，才会执行后面语句的代码
            // 如果前面语句是假，后面的代码就不执行。也可以用 if 语句代替。
            A[j-1] > A[j] && swag(A, j, j-1)
        //  内层循环结束，j 指向 A[0] 到 A[j] 中最大的值
        }
    }
//  外层循环每结束一次，就表明 A[i] 到 A[n-1] 是已经排好序的。
}

A = [2, 3, 1, 5, 6];
bubble_sort(A)
console.log(A)
```    

- 执行时间分析（执行效率）  
    - 外层循环执行 N-1 次
    - 内层循环执行的次数取决于 i 的值，也就是执行 i 次。
    - 总共执行的次数就是: T(n) = (N-1) + (N-2) + (N-3) + ... + 1 = 1/2(N^2 - N)

## 3. 什么时候有返回值，什么时候没有返回值？   

当对数组进行原地排序的时候，就没有返回值，否则就有返回值。







# 2. 算法的衡量和优化
# 3. 排序算法
# 4. 递归
# 5. 基础数据结构
# 6. 进阶算法（选学）
# 7. 面试题精选
