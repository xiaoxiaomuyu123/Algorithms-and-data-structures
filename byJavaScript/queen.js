/*********************************
 皇后枚举方法
 *********************************/
// 核心问题1： 判断棋盘上两个皇后是否相互攻击
function compatible(p, q, n) {
    // p, q 代表 两个皇后位置坐标的一维数组，n 表示棋盘的大小
    const [x1, y1] = [Math.floor(p / n), p % n];
    const [x2, y2] = [Math.floor(q / n), q % n];
    // 返回不再同一条直线和同一条斜线的位置
    return x1 !== x2 && y1 !== y2
        && Math.abs(x1 - x2) !== Math.abs(y1 - y2)
}

// 核心问题2：判断一组决策是不是最终答案，意思是，看一组 decision 里面的 n 个皇后中任意两个皇后是否不能相互攻击
// 若有一组皇后可以相互攻击，就返回 false，都不能相互攻击，才返回 true
function is_goal(n, decisions) {
    // n 应该是 decisions 的长度
    // 通过两个循环，i，j 拿到了决策树中所有的循环
    for(let i = 0; i < n; i++) {
        for(let j = i + 1; j < n; j++) {
            // i = j 就是自己和自己比，没有必要，就直接跳出这次循环
            if(i === j) { continue }
            if(!compatible(decisions[i], decisions[j], n)) {
                return false
            }
        }
    }
    return true
}

// 主函数,利用 哈希值去重 1.0 版本
// function queen(n, decisions = [], hset={}) {
//     if(decisions.length === n) {
//         decisions.sort((a, b) => a - b);
//         const hash = decisions.join('-');
//         if(hset[hash]) {return []}
//         hset[hash] = 1;
//
//         return [decisions];
//     }
//
//     // 代表要收集的结果，
//     let r = [];
//     // 遍历棋盘上的每一个点
//     for(let i = 0; i < n*n; i++) {
//
//         // 如果这个点不在决策当中，就再次向 decisions 里面放值，如果是最终的结果，才向 r 里面放入
//         if(decisions.indexOf(i) === -1) {
//
//             // 判断 decisions 里面的 皇后和 i 是否兼容，可以相互不攻击
//             // 兼容，就递归，执行下一步
//             if( decisions.every( j => compatible(j, i, n) ) ) {
//
//                 r = r.concat(queen(n, decisions.concat(i), hset))
//             }
//
//
//         }
//     }
//     return r;
// }

// 优化 2.0 版本
function queen(n, decisions = []) {
    if(decisions.length === n) {
        return [decisions];
    }

    // 代表要收集的结果，
    let r = [];

    // 保证 decisions 是递增的，这样就能保证 decisions 是不重复的，而且比对比 hash 值要快
    const start = decisions[decisions.length - 1] || -1

    // 遍历棋盘上的每一个点
    for(let i = start + 1; i < n*n; i++) {

        // 如果这个点不在决策当中，就再次向 decisions 里面放值，如果是最终的结果，才向 r 里面放入
        if(decisions.indexOf(i) === -1) {

            // 判断 decisions 里面的 皇后和 i 是否兼容，可以相互不攻击
            // 兼容，就递归，执行下一步
            if( decisions.every( j => compatible(j, i, n) ) ) {

                r = r.concat(queen(n, decisions.concat(i)))
            }


        }
    }
    return r;
}



// console.log(queen(7));
// console.log(queen(8));
console.log(queen(10));