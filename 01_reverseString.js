// Example 2: Reverse a String Using built-in Methods

function revStr(str){

    // return a new array of strings
    const strSplit = str.split('');

    // reverse the new created array elements
    let  newStr = strSplit.reverse();

    // join all elements of the array into a string

     newStr = newStr.join('');

       // return the reversed string
       return newStr;
};

const str = "I am a JavaScript Developer";
console.log(revStr(str));