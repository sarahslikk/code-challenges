//breadth first traveral
//starts with root node
//travel accross before you go deeper
/*
A -> B -> C
//nowhere else to go, then go to the next level
A-> B -> C -> D -> E -> F

uses queue data structure

queue has a direction
back -> front
enter back, leave front of queue
------->
initialize queue with root node A
main algorithm:
check if queue is empty
remove front element of queue
label current: a 
now it is visited
add a to values list
look at children: B and C
B, C to queue in order
take front element B add to list
look at child D, E
C leaves front of queue
add C child F to back of queue
D leaves front of queue
d has no children so continue
E leaves
F leaves 
no children for leaf nodes, queue is empty
algorithm complete is queue is empty

time complexity: 
n - number of nodes
Time - O(n) 
add every node to queue once and leaves queue once

A <- Parent/Root - no parent nodes
/   \
B     C  <- Childs
/ \     \ 
D   E     F <- Leafnodes, no children
*/