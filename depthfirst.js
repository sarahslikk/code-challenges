//depth first algorithm


/*

start with root name A


-travel through all nodes to very bottom

start A -> B -> D 
move laterally to E
move to C -> F
 ** must go deeper in tree until you can't 
 ** then move across tree
 uses stack


 store A in stack
 [A]
 check if stack is empty
 pop top element of stack label as current Node
 when something leaves stack, consider as visited
 current: A
 now look at children
 add children to stack
 push [C, B]
 left child B is top of stack, so go through B node first
remove top of stack
current is now: B
look at B's children, add to stack
push [E, D]
now pop top of stack, which is D
current is now: D
D has no children, so nothing is added to stack
now pop E
current is E
E has no children, move on
pop C
current is C:
C has one child, so push F node onto stack
** need to check if children exist before adding them to stack
F node on stack, pop
current: F
F has no children, now stack is empty, so you have travelled through entire binary tree
output: A, B, D, E, C, F
add values into list whenever something is poppe from stack

time complexity: n is number of Nodes
Time: O(n) - each node leaves stack exactly once


       A <- Parent/Root - no parent nodes
     /   \
    B     C  <- Childs
   / \     \ 
  D   E     F <- Leafnodes, no children
*/