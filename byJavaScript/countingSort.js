function counting_sort(A) {
    // 找到 A 数组的最大值
    const max = Math.max(...A);
    // 定义 累计数组 B
    const B = Array(max + 1).fill(0);
    // 定义回写数组 C
    const C = Array(A.length);
    // 计算 A 里面数字出现的次数
    A.forEach((item, index) => B[A[index]]++);
    // 累加 B 数组
    for (let i = 1; i < B.length; i++) {
        B[i] = B[i-1] + B[i]
    }
    // 将 B 的结果取出，写入 C 数组中
    for (let j = 0; j < A.length; j++){
        const p = B[A[j]] - 1; // 回写的位置
        C[p] = A[j];
        B[A[j]]--; // 新回写的位置
    }
    return C;
}


const A = [6, 0, 6, 5, 3, 3, 2, 2, 1, 7, 7, 7];
console.log(counting_sort(A));