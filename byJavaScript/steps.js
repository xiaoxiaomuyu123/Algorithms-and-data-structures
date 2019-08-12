// 一直蚂蚱爬 n 级楼梯，它可以爬 1 级，2 级 ... n 级。那么蚂蚱一共有多少种爬法？
function steps(n) {
    const s = [1, 1];
    for(let i = 2; i <= n; i++) {
        s[i] = s.reduce((a, b) => a + b)
    }
    // 求和之后把最后一项返回
    return s.pop();
}