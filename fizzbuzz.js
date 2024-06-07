//write a program that console logs the numbers from 
//1 to n but for multiples of 3 print
//fizz instead of the number
//for multiples of 5 print buzz
//for numbers who are multiples of five and three
//print fizzbuzz

function fizzBuzz(n) {
    //divide and conquer
    //multiples of 3: % 3 === 0
    //multiples of 5: % 5 === 0
    //multiples of 3 and 5 AND statement
    //chain if else in for loop
    //starting with multiples of 3 and 5
    //for loop from i = 1, to i <= n;

    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizzbuzz');
        } else if (i%3 === 0) {
            console.log('fizz')
        } else if (i%5 === 0) {
            console.log('buzz')
        } else {
            console.log(i);
        }
    }



}
fizzBuzz(5);
fizzBuzz(18);