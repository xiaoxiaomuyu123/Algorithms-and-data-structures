// 建堆
class MaxHeap {
    constructor(data, max = 10000) {
        this.list = new Array(max);
        for(let i = 0; i < data.length; i++) {
            this.list[i] = data[i];
        }

        // 目前堆的大小
        this.heapSize = data.length;
        this.build();
    }

    build() {
        // 最后一个分支节点的序号
        let i = Math.floor(n / 2) - 1;
        while(i > 0) {
            this.max_heapify(i--)
        }
    }

    max_heapify() {
        // 作业，哼！又留作业！！！
    }
}