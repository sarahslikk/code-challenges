//write a function that accepts a positive number n
//the function should console log a step shape
//with n levels using the # character
//spaces on right hand size

function steps(n) {
    //spaces are last level minus current level
    for (let i = 1; i <= n; i++) {
        console.log(('#'.repeat(i)) + (' '.repeat(n-i)));
    }

    //another way with nested loop
    //table containing rows and columns
    for (let row = 1; row <=n; row++) {
        let line = ''; //new row, if step is 3, 3 rows
        for (let col=1; col<=n; col++) {
            if (col <= row) {
                line += '#'; 
            } else {
                line += ' ';
            }
        }
        console.log(line);
    }


}
steps(3); //'#  '
          //'## '
          //'###'
steps(5);
steps(2);