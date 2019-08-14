// 深度优先

function dfs(node) {
    const stack = [node];
    while(stack.length > 0) {
        const first = stack.shift();

        // 打印结果
        console.log(first.key)
        // 将子节点压栈
        first.children.slice().reverse().forEach(
            child => stack.unshift(child)
        )
    }
}

// 递归是天然的深度优先
function dfs2(node) {
    console.log(node.key);
    node.chlidren.forEach(dfs);
}