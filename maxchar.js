//given a string, return the character that is most
//commonly used in the string

function maxChar(str) {
    let count = {}

    for (let i = 0; i < str.length; i++) {
        count[str[i]] = (count[str[i]] || 0) + 1;
        //++count[str[i]] || 1
        }

    let max = 0;
    let double = [];
    console.log(count);
  //  for (let key in count) {
  //      if (count[key] > max) max = count[key];
  //      }
  //  for (let key in count) {
  //      if (count[key] === max) {
  //          double.push(key);
  //      }
 //   }
   // return double;

    //another way
    let maxChar = '';

    for (let [key, value] of Object.entries(count)) {
        if (value > max) {
            max = value;
            maxChar = key;
        }
    }

}
console.log(maxChar('aaaoiiiifidokkdddkskddkk'))