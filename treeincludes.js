class Node {
    constructor(val) {
        this.val = val;
        this.left = null //by default a node will have no left child
        this.right = null // node will have no right child by default
    }
}
//is a target value found within binary tree
//true is yes, false if no

/*
  A <- Parent/Root - no parent nodes
/   \
B     C  <- Childs
/ \     \ 
D   E     F <- Leafnodes, no children
*/

//any traversal algorithm

//time: O(n) n = number of nodes

//recursive depth first

//base cases: 
//affirmative base case: we found target return true
/// negative base case: null node -> return false
//logical or
//false or true
//evaluate all the way down to the bottom
//then goes up and return false or true if target
//if true the oR will return true

const treeIncludes = (root, target) => {

    if (root === null) return false;

    //breadth first traversal

    //queue
    let queue = [ root ];

    while (queue.length > 0) {
       let current = queue.shift();
       if (current.val === target) return true;
       //if current node's value is target return true

       if (current.left) queue.push(current.left);
       if (current.right) queue.push(current.right);

    }
    return false;
    //traveled through tree and didn't find target

};

const treeIncludesRecurse = (root, target) => {
    //depth first recursion

    if (root === null) return false;
    //base case if current root is target, return true
    if (root.val === target) return true;
    //recursive calls for left and right child nodes
    return treeIncludesRecurse(root.left, target) || treeIncludesRecurse(root.right, target);
    //if target is found, will return true
    //OR will give true if one value found is true
    //recursion will go to the bottom of the tree to the null nodes which will return false 
    //bc of the base case
    //if it finds the target, other base case will return true
    //which will evaluate to true with or logic

};


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

console.log(treeIncludes(a, 'b'));
console.log(treeIncludes(a, 'e'));
console.log(treeIncludes(null, 'b'));
console.log(treeIncludesRecurse(a, 'e'));
console.log(treeIncludesRecurse(a, 'j'));







