/*
Recursive Inorder Traversal
Check if the current node is null. If so, return.


Recursively call the function on the left subtree.


Visit the current node.


Recursively call the function on the right subtree.
*/

function inorderRecursive(tree) {
    const stack = [];
    const result = [];
    let currentNode = tree;
      
    while (currentNode || stack.length) {
      while (currentNode) {
        stack.push(currentNode);
        currentNode = currentNode.left;
      }
  
      const node = stack.pop();
      result.push(node.val);
      currentNode = node.right;
    }
  
    return result;
  }

  function inorderRecursive(tree) {
    const result = [];
    
    function inorderTraverse(node) {
      if (!node) return;
          
      inorderTraverse(node.left);
      result.push(node.val);
      inorderTraverse(node.right);
    }
    
    inorderTraverse(tree);
    
    return result;
  }
