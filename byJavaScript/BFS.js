// 广度优先

function bfs(node) {
    const queue = [node];
    while(queue.length > 0) {
        const first = queue.shift();
        
        // 打印结果
        console.log(first.key)

        first.children.forEach(
            child => queue.push(child)
        )
    }
}