//check to see if two provided strings are anagrams of each other
//one string is an anagram of the other if it uses the same characters
//in the same quantity
//characters only, not spaces or punctuation
//capital letters same as lowercase

function charMap(str) {
    //another function to not repeat steps
    let charmap = {};
    str = str.toLowerCase().replace(/[\W]/g, '');
    for (let char of str) {
        charmap[char] = charmap[char]++ || 1;
    }
    return charmap;
}

function anagrams(stringA, stringB) {
    //step 1 buld char map for stringA
    //step 2 build char map for stringB
    //step 3 compare each character in both the char maps
    //replace(/[\W]/g, '') replaces anything that isn't a character with empty string

    //stringA = stringA.toLowerCase().replace(/[\W]/g, '');
    //stringB = stringB.toLowerCase().replace(/[\W]/g, '');
    //reduce or for of loop
  // let A = stringA.split('').reduce((a, b) => (a[b] = (a[b] || 0)+1, a), {});
   // let B = stringB.split('').reduce((a, b) => (a[b] = (a[b] || 0)+1, a), {});

    let charmapA = charMap(stringA);
    let charmapB = charMap(stringB);

    //for loop way, put into function charmap
    //for (let char of stringB) {
    //    charmapB[char] = charmapB[char]++ || 1;
   // }

   // return true;
    //object.keys to check number of keys same in each map
    //for loop to check count of letters the same in each string

    if (Object.keys(charmapA).length !== Object.keys(charmapB).length) return false;

    for (let key in charmapA) {
        if (charmapA[key] !== charmapB[key]) return false;
    }
    return true;

}
function cleanStr(str) {
    return str.toLowerCase().replace(/[\W]/g, '').split('').sort().join('');
    
}
function anagramsecondsolution (stringA, stringB) {
    //sort string a and string b
    //with cleanStr
    //compare the clean strings
    return cleanStr(stringA) === cleanStr(stringB);
}
console.log(anagrams('Coding m;;;oney', 'money coding'));
console.log(anagrams('fairy tales', 'fairy tale'));

console.log(anagramsecondsolution('Coding m;;;oney', 'money coding'));
console.log(anagramsecondsolution('fairy tales', 'fairy tale'));

