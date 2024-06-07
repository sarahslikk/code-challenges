//smallest value within tree
//minimum value
class Node {
    constructor(val) {
        this.val = val;
        this.left = null //by default a node will have no left child
        this.right = null // node will have no right child by default
    }
}

const minTree = (root) => {

    //breadth traversal iterative
    if (root === null) return 0;

    let queue = [ root ];

    let min = Infinity;

    while (queue.length > 0) {
        let current = queue.shift(); // O(n)^2 shifts all elements over one
        if (current.val < min) min = current.val;

        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);

    }

    return min;

};
//recursive method depth traversal
//if null return infinity base case
//compare between infinity and other nodes above
//smallest node is returned
//given smallest value in left and right, compare and compare current node and return smallest
//call for every node of tree
//time: O(n) n is nodes

const minTreeRecurse = (root) => {
    //base case first
    if (root === null) return Infinity;
    let left = minTreeRecurse(root.left);
    //give back smallest value in left and right subtree
    let right = minTreeRecurse(root.right);
    //choose smallest of root val, left and right
    return Math.min(left, right, root.val);
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


console.log(minTree(a));
console.log(minTreeRecurse(a));
