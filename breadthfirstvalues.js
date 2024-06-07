
class Node {
    constructor(val) {
        this.val = val; // current node
        this.left = null //by default a node will have no left child
        this.right = null // node will have no right child by default
    }
}

const breadthFirstValues = (root) => {
    
    if (root === null) return [];
    
    let values = [];
    let queue = [ root ];

    while (queue.length > 0) {
        //index 0 as front of queue
        //last index as back

        let current = queue.shift(); //take from front of array to simulate queue
        values.push(current.val);

        //push left child node to array 

        if (current.left !== null) queue.push(current.left);
        //push right child node to array
        if (current.right !== null) queue.push(current.right);


    }
    return values;

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

console.log(breadthFirstValues(a));