# 4. 递归
递归是一种重复结构的描述。
## 4.1 如何处理递归问题：
```
if(问题足够简单) {
    直接解决
} else {
    将问题拆解成和原问题有相同结构的更小问题
    解决每个这样的更小的问题
    将这些最小问题的解合并
}
```
## 4.2 递归和穷举
### 4.2.1 枚举与决策树
- 引出问题：求集合{a, b, c} 的所有子集。   
答案：{a, b, c}  {a, b}  {a, c}  {b, c}  {a}  {b}  {c}  {}  
- 枚举问题可以转化成决策树的问题  
    - 决策树的每个决策代表是否选择这个字符放入子集
    - 决策树的路径代表完整的决策
    - 决策树的叶子节点代表最终的结果
    - 每一步有两个选择，放进去或者不放进子集，一共有 n 步，因此一共有 2^n 种结果。
- 问题抽象：
```
function find_subsets(s, decisions) {
    // s 表示全集，decisions 是一个布尔型的数组

    // 所有决策都已完成
    if(s.length === decisions.length) { 返回结果 }
    let r = []
    r = r.concat(find_subsets(s, decisions.concat(true)));
    r = r.concat(find_subsets(s, decisions.concat(false)));
    return r;
}
```
### 4.2.2 全排列和决策树
- 全排列问题可以转换成依次决策从序列中拿出一个字符的决策问题。决策树是一个天然的递归问题。
- 全排列问题抽象：
```
function permutation(str, decisions) {
    // str 代表全集， decisions 代表已经选择的字符

    // 所有决策都已经完成
    if(decisions 中包含了 str 中全部字符) {
        返回结果
    }
    let r = []
    for(c in str 中所有不再 decisions 中的字符) {
        r = r.concat(permutation(str, decisions + c))
    }
    return r;
}
```

## 4.3 组合问题
### 4.3.1 从 集合 s 中取出 k 个元素，求所有组合情况
- 引出问题：
    - 从集合 {a, b, c, d, e, f, g} 中取出 1 个元素，有多少种组合？程序如何实现？
    ```
    for(let i = 0; i < 7; i++) {
        yield a[i];
    }
    ```
    - 取两个元素呢？
    ```
    for(let i = 0; i < 7; i++) {
        for(let j = i + 1; j < 7; j++) {
            yield a[i] :: a[j]
        }
    }
    ```
    - 如果要去三个元素呢？是不是要写 3 个循环呢？这样就不方便，也不现实。
- 从集合 s 中取出 k 个元素的递归条件
    - 初始条件
        - k = 0 或者 k === |s|，返回当前解
    - 递归
        - 选择一个元素 x
        - 递归：包含这个元素 x
        - 递归：不包含这个元素 x
        - 收集上面两步的结果
- 组合问题抽象：
```
function combination(s, k) {
    if(k === 0 || s.length === k) {
        返回结果
    }
    let r = [];
    const [first, ...others] = s;
    r.concat(first 和 combination(s, k-1) 每项组合)
    r.concat(combination(others, k))
    return r;
}
```
- 代码实现
```
function combinnation(s, k) {
    if(k === 0 || k === s.length) {
        return [ s.slice(0, k) ];
    }
    let r = [];
    let [first, ...others] = s;
    r = r.concat( combinnation(others, k-1).map(c => [first, ...c]));
    r = r.concat( combinnation(others, k));
    return r;
}

const s = ['a', 'b', 'c', 'd'];
console.log(combinnation(s, 2));
```
### 4.3.2 递归空间的优化
- 枚举问题，每个决策点都需要维护各自的决策数组。空间消耗比较大。

## 4.4 回溯算法（backtracking）
### 4.4.1 引出老鼠走迷宫的问题：
老鼠要走出迷宫，必然再走的过程中会遇到路口选择问题。当选择了一条路时，走到尽头，发现不是出口，就返回刚才选择的地点，选择另外一条路。走过的路都会被标记，保证不会重复走之前的路。就这样直到找到出口为止。
- 递归是天然的回溯结构，每次的递归节点可以看成是迷宫的一个格子
- 老鼠在每一个格子中都面临选择，利用递归可以让老鼠逐一尝试每个选择
- 如果这一次选择没有达成最终的目的，也就是找到出口，可以进行回溯
### 4.4.2 问题抽象：
```
function backtracking(...) {
    if( 到达终点 ) {
        返回路径
    }
    找到所有没有走过的选择
    递归前往每个选择
}
```
- 把迷宫抽象成二维数组，墙赋值为 1，路赋值为 0，终点赋值为 2。
    ```
    function rat_in_maze(maze, pos=[0,0], path = [], transverse = []) {

    }
    ```
    - maze：迷宫矩阵
    - pos：当前位置
    - path：路径，一位数组表示，表示从起点到终点的正确路径，是一个点的集合。
    - transverse：走过的地方记录，赋值成 1，这样就不会重复走之前的路了。
    - 返回 path

## 4.5 重复子问题优化
### 4.5.1 斐波那契数列
第 n 项等于前两项的和。1，1，2，3，5 .....
- 按照递推关系式来写程序就执行速度会非常慢，这种编程方式是属于自顶向下从 n 开始执行。速度慢的原因是，当 n = 5 时，fib（3）求解了 2 次，fib（2）求解了 3 次，fib（1）求解了 5 次。
```
function fib(n) {
    return n <= 1? 1 : fib(n-1) + fib(n-2)
}
```
- 优化：从底部向上计算。因为后一项是依据前两项产生的，那么，就先把前面两项算出来；这样时间复杂度就变成了 O(n) 了。
```
function fib(n) {
    let a = 1,
        b = 1;
    for(let i = 2; i <= n; i++) {
        [b, a] = [a+b, b]
    }
    return b;
}
```
### 4.5.2 蚂蚱爬楼梯问题
- 题目描述：
一直蚂蚱爬 n 级楼梯，它可以爬 1 级，2 级 ... n 级。那么蚂蚱一共有多少种爬法？
- 递归表述爬楼梯的过程：
    - 爬 n 级楼梯，可以直接跳 n 级
    - 爬 n 级楼梯，可以**递归**爬 n-1 级，再跳 1 级
    - 爬 n 级楼梯，可以**递归**爬 n-2 级，再跳 2 级
    - 爬 n 级楼梯，可以**递归**爬 n-3 级，再跳 3 级
    - ...
    - 爬 n 级楼梯，可以先爬 1 级，再跳 n-1 级    
    f(n) = f(n-1) + f(n-2) + f(n-3) + ... + f(1) + f(0)  
    f(0) = 1    
    如果按照上面这个关系式写程序，会比斐波那契数列更慢
- 问题优化
这个问题实际上有很多重复的子结构
    - f(n) 需要求 f(0) ... f(n-1) 各一次
    - f(n-1) 需要求 f(0) ... f(n-2) 各一次
    - f(n-2) 需要求 f(0) ... f(n-3) 各一次
    - ...   
    - 构成了 n 叉树。     
这样有太多重复子结构，就考虑从底部向上构造递归程序。   
- 自下而上构造递归程序的实现
```
function steps(n) {
    const s = [1, 1];
    for(let i = 2; i <= n; i++) {
        s[i] = s.reduce((a, b) => a + b)
    }
    // 求和之后把最后一项返回
    return s.pop();
}

console.log(steps(10));
```
### 4.6 尾递归
- 定义：
尾递归，通常是**单个**递归调用体作为程序的最后返回
    - 阶乘算作一个尾递归
    ```
    function factorial(n) {
        if(n === 0) {return 1}
        return n * factorial(n-1)
    }
    ```
    - 阶乘另外一种更加严格的尾递归写法：把结果作为参数传进函数中，最后返回这个参数
   ```
   function factorial(n, f = 1) {
       if(n === 0) { return f}
       return factorial(n-1, f * n)
   }
   ```
- 因为单个尾递归发生在递归体最后，因此可以和循环相互转换
上面的程序可以写成
```
function factorial(n, f = 1) {
    while(true) {
        if(n === 0) { return f}
        [n, f] = [n-1, f * n]
    }
}
```
- 菲波那切数列的尾递归变成循环
这样可以优化函数调用的时间。
```
function fib(n, a = 1, b = 1) {
    if(n <= 1) return b;
    return fib(n-1, b, a+b)
}
```
## 4.7 搜索问题（8 皇后）
### 4.7.1 搜索问题的场景
- 迷宫中的老鼠
- 对弈问题
- 机器人寻路
- 8 皇后问题
### 4.7.2 8皇后问题
#### 1. 四皇后问题：
- **问题描述**：      
在国际象棋中，皇后的功能很强大，可以攻击上下左右和四个对角线方向的任何目标，四皇后问题就是，如何在 4*4 的棋盘上摆放四个皇后，使得她们相互之间不会被攻击。
- **问题解析**：        
这是一个搜索问题，可以利用递归对四皇后可能同时出现在棋盘上的所有状态进行枚举，所有的状态称为状态空间。可以画一棵决策树来表示所有的状态，那么所有可能的状态数量分析就是：
    - 四皇后，放到 4*4 的棋盘上，一共有多少种放法？      
    从 16 个位置中拿出 4 个位置放皇后，C（16,4）= 1820
    - 八皇后，放到 8*8 的棋盘上，一共有多少种放法？      
    从 64 个位置中拿出 8 个位置放皇后，C（64,8）= 4,426,165,368，计算量相当大。
- **n 皇后问题用**穷举**方法的问题抽象**        
    - `function queen(n, chessboard, decisions) {...}`
        - n 表示皇后的数量和棋盘的大小
        - chessboard 棋盘坐标的一维数组。这里需要进行棋盘一维数组和二维数组的相互转换。一维数组中的数字 p 如何转换成棋盘中的坐标 [x][y] 呢？    
            - x = Math.floor(p / n); n 是棋盘的长度
            - y = p % n
        - decisions 是决策树的决策，这个决策也是一个一维数组，皇后放在哪里，就对应着一维数组中的一个数字
        - 返回所有可能
    - 核心问题一：判断棋盘上两个皇后是否相互攻击
    ```
    function compatibale(p, q, n) {

        // p, q 代表 两个皇后位置坐标的一维数组，n 表示棋盘的大小
        const [x1, y1] = [Math.floor(p / n), p % n];
        const [x2, y2] = [Math.floor(p / n), p % n];

        // 返回不再同一条直线和同一条斜线的位置
        return x1 !== x2 && y1 !== y2
            && Math.abc(x1 - x2) !== Math.abs(y1 - y2)
    }
    ```
    - 核心问题二：判断一组决策是不是最终答案：
    ```
    function is_goal(n, decisions) {
        // n 应该是一维数组来表示棋盘的长度， 而不是 decisions 的长度，decisions 的长度是皇后的数量
        // 通过两个循环，i，j 拿到了决策树中所有的循环
        for(let i = 0; i < n; i++) {
            for(let j = i + 1; j < n; j++) {
                // i = j 就是自己和自己比，没有必要，就直接跳出这次循环
                if(i === j) { continue }
                if(!compatibale(decisions[i], decisions[j], n)) {
                    return false
                }
            }
        }
        return true
    }   
    ```    
    - 综上，四皇后基于枚举做法的代码思路：
    利用决策树，第一个皇后有 16 个位置，第二个皇后有 15 个位置，第三个皇后有 14 个位置，第四个皇后有 13 个位置。
    ```
    function queen(n, chessboard, decisions) {
        // 如果 decisions 中有 n 项，说明递归到底了，四个皇后的位置可以确认了，就可以判断相互之间是否可以攻击。
        if(decisions 中有 n 项 && 满足互不攻击) { 返回结果 }
        遍历剩余的位置
        递归
    }
    ```
    真正的代码如下
    ```
    function queen(n, decisions = [], hset={}) {
        if(decisions.length === n) {
            decisions.sort((a, b) => a - b);
            const hash = decisions.join('-');
            if(hset[hash]) {return []}
            hset[hash] = 1;
            return is_goal(n, decisions) ? [decisions] : [];
        }

        // 代表要收集的结果，
        let r = []
        // 遍历棋盘上的每一个点，这里可以进行优化
        for(let i = 0; i < n*n; i++) {

            // 如果这个点不在决策当中，就再次向 decisions 里面放值，如果是最终的结果，才向 r 里面放入
            if(decisions.indexOf(i) === -1) {
                r = r.concat(queen(n, decisions.concat(i), hset))
            }
        }
        return r;
    }
    ```
    但这样做的缺点是，执行速度非慢，可以优化上面程序最后的 for 循环。可以先判断是否是行和列以及对角线的情况，
    - 优化 1.0 版本
    ```
    function queen(n, decisions = [], hset={}) {
        if(decisions.length === n) {
            decisions.sort((a, b) => a - b);
            const hash = decisions.join('-');
            if(hset[hash]) {return []}
            hset[hash] = 1;

            return [decisions];
        }

        // 代表要收集的结果，
        let r = [];
        // 遍历棋盘上的每一个点
        for(let i = 0; i < n*n; i++) {

            // 如果这个点不在决策当中，就再次向 decisions 里面放值，如果是最终的结果，才向 r 里面放入
            if(decisions.indexOf(i) === -1) {

                // 判断 decisions 里面的 皇后和 i 是否兼容，可以相互不攻击
                // 兼容，就递归，执行下一步
                if( decisions.every( j => compatible(j, i, n) ) ) {

                    r = r.concat(queen(n, decisions.concat(i), hset))
                }
            }
        }
        return r;
    }
    ```
    这样的话，7 皇后能得出结果，但是 8 皇后就不行了，继续优化
    - 优化 2.0 版本
    ```
        // 1. 先判断两个皇后是否相互冲突
    function compatible(p, q, n) {
        const [x1, y1] = [~~(p / n), p % n];
        const [x2, y2] = [~~(q / n), q % n];

        return x1 !== x2 && y1 !== y2 &&
            Math.abs(x1 - y1) !== Math.abs(x2 - y2)
    }

    // 2. 写主函数，注意去重
    function queen(n, decisions = []) {
        if(decisions.length === n) {
            return [decisions]
        }

        let r = [];
        let start = decisions[decisions.length - 1] || -1;
        for(let i = start + 1; i < n * n; i++){
            if(decisions.every(j => compatible(i, j, n))) {
                r = r.concat(queen(n, decisions.concat(i)))
            }
        }
        return r;
    }
    ```
## 4.8 深度优先搜索和广度优先搜索
### 4.8.1 深度优搜索 （Depth First Search）
- 含义：递归总是向着最深的节点而去。递归是天然的 dfs（深度优先）
- 遍历过程：为了实现深度优先搜索，要用到栈这个数据结构。所有的数据结构都分为两部分：第一部分是 API，怎么使用这个数据结构；第二部分是这个数据结构的底层实现。
    - 栈这最终数据结构是先入后出（FILO）

### 4.8.2 广度优先()
-
