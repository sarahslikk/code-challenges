//write a function that accepts an integer n
//and return a N by N spiral matrix
//matrix(2) = 
//[[1,2],
//[4, 3]]


function matrix(n) {

    //nested loop
    //rows and columns

    //startrow
    //endrow
    //counter variable
    //startcol
    //endcol

    //first loop from startcol to end col
    //take care of top row
    //increment startrow by one, to move on to next row
    //another loop that goes from start row to end row
    //take care of right column
    //decrement endcol to shift left to next col
    //another loop for endrow to take care of bottom row
    //decrement endrow to shift up to next row
    //loop from end row to start row to take care of left side of col
    //put loops inside while loop
    //to take care of inner 4 sides

    let result = [];
    let count = 1;
    let startrow = 0;
    let endrow = n-1;
    let startcol = 0;
    let endcol = n-1;

    for (let i = 0; i < n; i++) {
        result.push([]);
        //initial loop to push number of arrays we need
        //if input = 4, will push 4 arrays

        //fill arrays with values
    }

        while (startrow <= endrow && startcol <= endcol) {
            //will keep looping until reaches end of row or column
            //top 
        for (let i = startcol; i <=endcol; i++) {
            result[startrow][i] = count; //i is col
            count++; 
            //add values for top row (startrow) of matrix from first index of startcol to endcol
        }
        startrow++; //move to next row

        //right, 
        for (let i = startrow; i <=endrow; i++) {
            result[i][endcol] = count; //i is row
            count++; 
            //add values for end column of matrix
        }
        endcol--; //move to next column to left

        //bottom, 
        for (let i = endcol; i >= startcol; i--) {
            result[endrow][i] = count; //i is col
            count++; 
            //add values for bottom row of matrix
        }
        endrow--;


        //left
        for (let i = endrow; i >= startrow; i--) {
            result[i][startcol] = count; //i is row
            count++; 
            //add values for leftmost column of matrix
        }
        startcol++;
        

    }

    return result;

}
console.log(matrix(4));
console.log(matrix(5));