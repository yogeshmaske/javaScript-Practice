// Replace All Occurrence of String
// Example 1: Replace All Occurrence of String Using RegEx
// program to replace all occurrence of a string

// const string = 'Mr Red has a red house and a red car';

// console.log(string);
// // create regex
// const regex = /red/gi;

// // replace the charactor
// const newTxt = string.replace(regex,'blue');

// // display the result
// console.log(newTxt);


// Example 2: Replace All Occurrence of String Using built-in Method


const string = 'Mr red has a red house and a red car';
const result = string.split('red').join('blue')
console.log(result)