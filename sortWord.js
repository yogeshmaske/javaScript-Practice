// Example: Sort Words in Alphabetical Order
// program to sort words in alphabetical order


const string ="I am learning JavaScript";
// const string ="i am learning javascript";
// converting to an array

 const words = string.split(' ');

 // sort the array elements
  words.sort();
  console.log("sorted array elements")
  console.log(words);

 // convert sorted word to string
 newStr = words.join(' ');

 // display the sorted words
 console.log(newStr);

 // display the sorted words
 console.log('The sorted words are:');
 
 

 for (const items of words) {
    
    console.log(items);
 }