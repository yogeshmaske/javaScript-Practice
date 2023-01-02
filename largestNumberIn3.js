
// program to find the largest among three numbers

// // // take input from the user
// const num1 = parseFloat(prompt("Enter first number: "));
// const num2 = parseFloat(prompt("Enter second number: "));
// const num3 = parseFloat(prompt("Enter third number: "));
// let largest;

// const num1 = 2
// const num2 = 5
// const num3 = 9
// let largest;

// // check the condition
// if(num1 >= num2 && num1 >= num3) {
//     largest = num1;
// }
// else if (num2 >= num1 && num2 >= num3) {
//     largest = num2;
// }
// else {
//     largest = num3;
// }

// // display the result
// console.log("The largest number is " + largest);



// Using Math.max()

const num1 = 2
const num2 = 5
const num3 = 9
let largest = Math.max(num1,num2,num3);

console.log("Largest Number is",largest);