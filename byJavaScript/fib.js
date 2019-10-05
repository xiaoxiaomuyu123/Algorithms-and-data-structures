// 菲波那切数列

// 最容易想的使用递推表达式来写程序，但是执行时间太长，O(2^n)

function fib1(n) {
    return n <= 1? 1 : fib1(n-1) + fib1(n-2)
}

// 优化算法，从底部开始计算，这种方法属于动态规划的范畴
function fib2(n) {
    let a = 1,
        b = 1;
    for(let i = 2; i <= n; i++) {
        [b, a] = [a+b, b]
    }
    return b
}

console.log(fib1(40));
console.log(fib2(40));