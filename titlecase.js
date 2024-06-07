//write a function that accepts a string
//the function should capitalize the first letter
//of each word in the string
//return capitalized string

function capitalize(str) {
    //iterate through string
    //toUpperCase on 0 element of string[i]
    //slice to include rest of word
   str = str.split(' ');
    let final = [];

    for (let i = 0; i < str.length; i++) {
        let word = str[i];
        final.push(word[0].toUpperCase() + word.slice(1));
    }
    let result = str.map(x => x[0].toUpperCase() + x.slice(1)).join(' ');

    console.log(result);


    return final.join(' ');
}
console.log(capitalize('this is a random string poopp pee'));