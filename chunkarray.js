//given an array and chunk size,
//divide the array into many subarrays
//where each subarray is of length chunk size

//chunk [1,2,3,4], 2 => [[1,2][3,4]]

function chunk(array, size) {
    //divide and conquer technique
    //how to get first two elements
    //step 1
    //create final array holder
    //step 2
    //iterate through array
    //step by size so as not to chunk for every element, just every size+i element
    //step 3
    //slice from element to element+size, last element not included
      let final = [];
      for (let i = 0; i < array.length; i += size) {
          let chunk = array.slice(i, i + size);
          final.push(chunk);
      }
      //return final;

      //another way
      //while loop
      //still step by index+= size

      let result = [];
      let index = 0;
      while (index < array.length) {
        result.push(array.slice(index, index+size));
        index+= size;
      }
      return result;
  }
console.log(chunk([1,2,3,4, 5, 6, 7, 8, 9, 10], 3));
console.log(chunk([1,2,3,4], 2));