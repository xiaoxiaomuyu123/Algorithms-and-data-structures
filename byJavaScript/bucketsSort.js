function insert(arr, i, x) {
    let p = i - 1;
    while(p >= 0 && arr[p] > x) {
        arr[p+1] = arr[p];
        p--;
    }
    arr[p+1] = x;
}

function insert_sort(arr) {
    for(let i = 1; i < arr.length; i++) {
        insert(arr, i, arr[i])
    }
}

function bucket_sort(arr, k, s) {
    // 生成 k 个桶
    let buckets = Array.from({length: k}, () => []);

    // 遍历 arr 中所有的数字，将数字放在对应的桶中
    arr.forEach(number => {
        let i = Math.floor(number / s);
        buckets[i].push(number);
    })

    // 遍历每个桶，把桶中的数字进行排序
    buckets.forEach(bucket => {
        insert_sort(bucket);
    })

    // 取出同种的数字
    return [].concat(...buckets)
}

let arr = [23, 45, 12, 67, 90, 46, 7, 8, 56, 57, 43, 75, 97, 89, 86, 88 ]

console.log(bucket_sort(arr, 10, 10))