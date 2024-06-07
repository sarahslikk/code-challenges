//write a function that returns the number of vowels in a string
//aeiou


function vowels(str) {
    //my solution
    //step 1:
    //holder string for vowels
    //count variable
    //step 2
    //iterate over str
    //step 3 - includes method
    //if vowel.includes(str[i])
    //count++
    //return count

    let count = 0;
    let vowels = 'aeiou';
    //you can also use for of loop
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i].toLowerCase())) {
            count++;
        }
    }
    //return count;

    //another solution - regex match
    str = str.match(/[aeiou]/ig) || [];
    console.log(str)
    return str.length;
}
console.log(vowels('HI there!')) //return 3
console.log(vowels('eeeeeiiiiiuuUUUUOOoo'))
console.log(vowels('bbbb'))
