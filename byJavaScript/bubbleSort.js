function swag(A, i, j) {
    const t = A[i];
    A[i] = A[j];
    A[j] = t;
}

function bubble_sort(A) {
    for(let i = A.length-1; i>1; i--) {
        for(let j = 1; j<i; j++) {
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