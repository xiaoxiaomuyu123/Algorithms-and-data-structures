// 先解决关键子问题，如何根据中心点拆分数组
function swag(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
}

function partion(arr, lo, hi) {
    // 定义中心点
    const pivot = arr[hi - 1];
    let i = lo,
        j = hi - 1;
    while (i !== j){
        if(arr[i] <= pivot) {
            i++;
        } else {
            swag(arr, i, --j);
        }
    }
    swag(arr, j, hi-1);
    return j;
}

// const arr1 = [10, 50, 30, 90, 40, 80, 70];
// const arr2 = [10, 50, 30, 90, 40, 80, 70];
// partion(arr1, 0, 7)
// partion(arr2, 0, 3)
// console.log(arr1, arr2)

function quickSort(arr, lo = 0, hi = arr.length) {
    // 判断一下需要排序的元素个数，如果小于 2，就不需要排序，直接返回就好了
    // 这也是递归结束的条件
    if((hi - lo) < 2) {
        return
    }
    const p = partion(arr, lo, hi);
    quickSort(arr, lo, p);
    quickSort(arr, p + 1, hi);
}

const arr3 = [10, 50, 30, 90, 40, 80, 70];
quickSort(arr3);
console.log(arr3)
