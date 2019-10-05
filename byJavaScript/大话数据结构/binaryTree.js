/* 创建一棵二叉树，实现前序遍历，中序遍历，后序遍历 */
function Node(key) {
    this.key = key;
    this.left = null;
    this.right = null;
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(key) {
        let newNode = new Node(key);

        // 利用闭包定义私有方法
        let insertNode = (node, newNode) => {
            if(node.key > newNode.key) {
                if(node.left === null) {
                    node.left = newNode;
                } else {
                    insertNode(node.left, newNode);
                }
            } else {
                if(node.right === null) {
                    node.right = newNode;
                } else {
                    insertNode(node.right, newNode);
                }
            }
        }

        if(this.root === null) {
            this.root = newNode;
        } else {
            insertNode(this.root, newNode);
        }
    }

    // 前序遍历
    preOrder(node = this.root) {
        if(node) {
            console.log('前序遍历', node.key);
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    }

    // 中序遍历
    inOrder(node = this.root) {
        if(node) {
            this.inOrder(node.left);
            console.log('中序遍历', node.key);
            this.inOrder(node.right);
        }
    }

    // 后序遍历
    postOrder(node = this.root) {
        if(node) {
            this.postOder(node.left);
            this.postOder(node.right);
            console.log('后序遍历', node.key)
        }
    }
}


// 测试
let bTree = new BinaryTree();
let arr = [11, 7, 15, 5, 3, 9, 8, 10, 13, 12, 14, 20, 18, 25];
arr.forEach(item => bTree.insert(item));



console.log(bTree);
console.log(bTree.preOrder());
console.log(bTree.inOrder());
console.log(bTree.postOrder());