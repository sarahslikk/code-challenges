//return true if the string is a palindrome
//false if it is not


function palindrome(str) {
    let reversed = str.split('').reverse().join('');
    //return reversed === str;

    //two pointer technique
    let start = 0;
    let end = str.length-1;

    while (start < end) {
        if (str[start] !== str[end]) {
            return false;
        } else {
            start++;
            end--;
        }
    }
    return true;
}





console.log(palindrome('racecar'));
console.log(palindrome('saoifds'))