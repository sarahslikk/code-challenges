//root to leaf path
//start at the root and terminate leaf
//consider total sum within nodes
//find biggest path sum from root to leaf
//recursive
//base case ends at leaf node - no children
//base case that checks for leaf node
//return values within leaf node/
//find maximum value between leaf nodes
//at parent node, choose between bigger value between subtrees
//add bigger value to node
//then again for ultimate root, compare subtrees values 
//take bigger of the children and add to root
//for null nodes base case: return -Infinity so that it never wins a comparison
//time : O(n) comparison through each node 

class Node {
    constructor(val) {
        this.val = val;
        this.left = null //by default a node will have no left child
        this.right = null // node will have no right child by default
    }
}
const maxPath = (root) => {

    //iterative
    //depth traversal
    let stack = [{node: root, sum: 0}];
    let max = -Infinity;

    while (stack.length > 0) {
        let { node, sum } = stack.pop();

         // If the node is null, continue to the next iteration
        if (!node) continue;

        // Update the current sum by adding the node value
        sum+= node.val;
        // Update the maximum sum if the current sum is greater
        max = Math.max(max, sum);


        // Push the left and right children onto the stack along with their respective sums
        stack.push({node: node.left, sum: sum});
        stack.push({node: node.right, sum: sum});

    }

    return max;

}

const maxPathSum = (root) => {

    ///recursion
    //base case: 
    //find the leaf, no left or right child means leaf 
    //so return value of that node
    if (root === null) return -Infinity;
    if (root.left === null && root.right === null) return root.val;

    //choose bigger result from left or right
    let maxchild = Math.max(maxPathSum(root.left), maxPathSum(root.right));

    return root.val + maxchild;

}
const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);


a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

console.log(maxPathSum(a));
console.log(maxPath(a));