
class Node {
    constructor(val) {
        this.val = val;
        this.left = null //by default a node will have no left child
        this.right = null // node will have no right child by default
    }
}

//iterative way
const depthFirstValues = (root) => {
    if (root === null) return [];
    //return empty array if root is null
    let result = [];
    let stack = [ root ];
    //end of array - top of stack
    while (stack.length > 0) {
        let current = stack.pop();
        //current is instance of node
        result.push(current.val);

        if (current.right) stack.push(current.right);
        if (current.left) stack.push(current.left);
        //push right then left to traverse left first or vice versa
        //make sure these child nodes actually exist and are not null
    }
    console.log(result);
    return result;
}

//recursive way
const depthFirstRecurse = (root) => {
    if (root === null) return [];
    //base case to put values in array
    //root is null means you reached bottom

    let left = depthFirstRecurse(root.left); //gives back array containing all values in left
    // [b, d, e]
    //all nodes on left
    let right = depthFirstRecurse(root.right); //array of all values in right
    //[c , f]
    //all nodes on right
    //root.val would be a
    console.log([root.val, ...left, ...right])
    return [root.val, ...left, ...right]

}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');


a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

depthFirstValues(a);
depthFirstValues(null);
depthFirstRecurse(a);
depthFirstRecurse(null);