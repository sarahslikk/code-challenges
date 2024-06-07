//write a function that accepts a positive number N
//console log a pyramid shape with N levels
//using # charater
//pyramid should have spaces on both left and right hand sides
//to create pyramid shape

function pyramid(n) {
    //step 1
    //for loop i=1 to <= n
    //line string = ''
    //step 2
    //nested for loop
    //step 3 
    //if col <= row
    //+= #
    //else 
    // ' ' 
    //# += 2 each time;
    //or last column would be 2n-1
    //3 would be 5 # symbols, 2(3)-1
    //math.floor((2n-1)/2) == mid point
    //col >= midpoint - row and col <= midpoint + row


    let mid = Math.floor((2*n-1)/2);

    for (let row = 0; row < n; row++) {
        let line = '';
        for (let col = 0; col < 2*n-1; col++) {
            if (col >= mid - row && col <= mid + row) {
                line += '#'
            } else {
                line += ' '
            }
        }

        console.log(line);
    }



}
pyramid(3); //'  #  '
            //' ### '
            //'#####'
pyramid(9);