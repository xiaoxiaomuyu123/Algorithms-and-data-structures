function radix_sort(arr) {
    let max = Math.max(...arr);
    let buckets = Array.from({length:10}, () => []);
    let m = 1;
    while(m < max) {
        // 循环 arr 里面的数字，根据 digital 将里面的数字放在桶中
        arr.forEach(number => {
            let digital = Math.floor((number % (m * 10)) / m);
            buckets[digital].push(number);
        })
        // 把同里面的数字按照顺序拿出来
        let j = 0;
        buckets.forEach(bucket => {
            while(bucket.length > 0) {
                arr[j++] = bucket.shift();
            }
        })
        m = m * 10;
    }
}

let arr = [10, 23, 34, 78, 345, 234, 435, 24]
radix_sort(arr);
console.log(arr)