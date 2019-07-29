function bsearch(A, x) {
    let left = 0, // 查找范围的左边界
        right = A.length - 1, // 查找范围的右边界
        guess  // 猜想值的索引
    while(left < right) {
        guess = Math.floor((left + right)/2 );
        if(A[guess] === x) {
            return guess;
        } else if (A[guess] > x) {
            right = guess - 1;
        } else {
            left = guess + 1;
        }
    }
    return -1;
}

const A = [3, 5, 19, 22, 25, 33, 45, 47, 57, 66, 71, 78]
console.log(bsearch(A, 88));
console.log(bsearch(A, 68));
console.log(bsearch(A, 22));