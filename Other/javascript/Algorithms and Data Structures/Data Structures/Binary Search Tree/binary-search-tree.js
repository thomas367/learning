/**
 * Binary search tree, as shown in its name, is an ordered tree data structure. 
 * Every parent nodes has at most two children, every node to the left of a parent 
 * node is always less than the parent and every node to the right of the parent node 
 * is always greater than the parent.
 * Like all tree data structure, binary search tree has a root, the top node (just one node), 
 * parent node has at most two children nodes, which are called siblings. The edge is the 
 * connection between one node and another. The node without children is called leaf.
 */

class BinarySearchTreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    /**
     * The insert method accepts a value and insert it into the BST in the correct
     * position. 
     * Then it returnd the binary search tree.
     */
    insert(value) {
        const newNode = new BinarySearchTreeNode(value);

        if (!this.root) {
            this.root = newNode;
            return this;
        }

        let currentNode = this.root;

        while (true) {
            if (newNode.value === currentNode.value) {
                return this;
            }

            if (newNode.value < currentNode.value) {
                if (!currentNode.left) {
                    currentNode.left = newNode;
                    return this;
                }
                currentNode = currentNode.left; // New node smaller than parent. Place to left
            } else {
                if (!currentNode.right) {
                    currentNode.right = newNode;
                    return this;
                }
                currentNode = currentNode.right; // New node bigger than parent. Place to right
            }
        }
    }

    /**
     * The find method finds a node in a binary tree. 
     * If found returns the node, otherwise returns `null`.
     */
    find(value) {
        let currentNode = this.root;

        while (currentNode) {
            if (value === currentNode.value) {
                return currentNode;
            }

            if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
        }

        return null;
    }

    /**
     * Postorder traversal visits the tree nodes from mid, to left, to right.
     * 
     * 1. If the node is null, do nothing – else, do some operation on the node.
     * 2. Traverse to the left child of the node and repeat.
     * 3. Traverse to the right child of node and repeat.
     */
    depthFirstSearchPreOrder(node = this.root, arr = []) {
        if (node) {
            arr.push(node.value);
            if (node.left) {
                this.depthFirstSearchPreOrder(node.left, arr);
            }
            
            if (node.right) {
                this.depthFirstSearchPreOrder(node.right, arr);
            }
        }

        return arr;
    }

    /**
     * Postorder traversal visits the tree nodes from left, to right, to mid.
     * 
     * 1. If the node is null, do nothing – else, recursively call the function on the node's left child.
     * 2. When there are no more left children, call the function on node.right.
     * 3. Finally, do some operation on the node.
     */
    depthFirstSearchPostOrder(node = this.root, arr = []) {
        if (node) {
            if (node.left) {
                this.depthFirstSearchPostOrder(node.left, arr);
            }
            if (node.right) {
                this.depthFirstSearchPostOrder(node.right, arr);
            }
            arr.push(node.value);
        }

        return arr;
    }

    /**
     * The Inorder algorithm traverses the tree nodes from left, to mid, to right.
     * 
     * 1. If the node is null, do nothing – else, recursively call the function on the node's left child.
     * 2. Then, do some operation on the node after traversing though all left children. Our current node is guaranteed to be the leftest node.
     * 3. Finally, call the function on node.right.
     */
    depthFirstSearchInOrder(node = this.root, arr = []) {
        if (node) {
            if (node.left) {
                this.depthFirstSearchInOrder(node.left, arr);
            }

            arr.push(node.value);
            
            if (node.right) {
                this.depthFirstSearchInOrder(node.right, arr);
            }
        }

        return arr;
    }
}

const bst = new BinarySearchTree();
bst.insert(22);
bst.insert(49);
bst.insert(85);
bst.insert(66);
bst.insert(95);
bst.insert(90);
bst.insert(100);
bst.insert(88);
bst.insert(93);
bst.insert(89);

bst.depthFirstSearchPreOrder(); // [ 22, 49, 88, 66, 95, 90, 89, 93, 100 ]
bst.depthFirstSearchPostOrder(); // [ 66, 89, 93, 90, 100, 95, 88, 49, 22 ]
bst.depthFirstSearchInOrder(); // [ 22, 49, 66, 88, 89, 90, 93, 95, 100 ]
