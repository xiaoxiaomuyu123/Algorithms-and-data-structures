// extract() {
//     if(this.heapSize === 0) return null;
//     const item = this.list[0];
//     swap(this.list, 0, this.heapSize - 1);
//     this.heapSize--;
//     this.max_heapify(0);
//     return item;
// }

function heap_sort(A) {
    // 针对传进来的数组，先建一个最大堆树
    const heap = new MaxHeap(A);

    // 不断的进行 extract 操作，取出最大堆树的值
    while(heap.heapSize > 0) {
        A[heapSize - 1] = heap.extract();
    }
}