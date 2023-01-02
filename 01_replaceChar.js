// Example 2: Replace Character of a String Using RegEx
// program to replace a character of a string

const string = 'Mr Red has a red house and a red car';
console.log(string,"\n");
// regex expression
// const regex = /red/g // /g --represent global
const regex = /red/gi; // /gi -- represent the case insensetive

// replace the characters
const newText = string.replace(regex,'blue');

// display the result
console.log(newText);