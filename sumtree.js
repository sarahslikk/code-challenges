//get sum of trees 

//breadth or depth firs traversal
//add values into running sum

class Node {
    constructor(val) {
        this.val = val;
        this.left = null //by default a node will have no left child
        this.right = null // node will have no right child by default
    }
}

const treeSum = (root) => {
    //sum using depth traversal

    if (root === null) return 0;

    let sum = 0;

    let stack = [ root ];

    while (stack.length > 0) {
        let current = stack.pop();

        sum += current.val;
        
        if (current.left) stack.push(current.left);
        if (current.right) stack.push(current.right);
    }
    return sum;
}

const sumTreeRecurse = (root) => {
    //depth first recursion
    //remember leaves that dont have children have pointers to none
    //base case is simplest version of input
    //needs to be about null node - no node/empty tree
    //sum of null node would be zero
    //what is subtree's total sum
    //left and right childs sum
    //added up from bottom to top

    //time: O(n) recursive call for every node of the tree

    //base case null nodes

    if (root === null) return 0;
    return root.val + sumTreeRecurse(root.left) + sumTreeRecurse(root.right);
    //find result of sum of left and right subtrees
    //add everything together along with root node (not included in root.left or root.right)
    //recursion calls go all the way down before adding up values of left and right


}
const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(2);
const f = new Node(1);


a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

console.log(treeSum(a)); //sum = 25
console.log(sumTreeRecurse(a)); //sum = 25
