// program to convert decimal to binary

// function convertToBinary(x){

//     let bin=0;
//     let rem,i=1,step=1;
//     while (x!=0) {
//         rem = x%2;

//         console.log(
//             `Step ${step++}: ${x}/2, Remainder = ${rem}, Quotient = ${parseInt(x/2)}`
//         );

//         x = parseInt(x / 2);
//         bin = bin + rem * i;
//         i = i * 10;
//     }
//     console.log(`Binary: ${bin}`);
// }
// number=5;
// convertToBinary(number);




// Example 2: Convert Decimal to Binary Using toString()
// program to convert decimal to binary

// take input
// const number = parseInt(prompt('Enter a decimal number: '));
const number = 15;

// convert to binary
const biner = number.toString(2);
const octa = number.toString(8);
const hexa = number.toString(16);
const decta = number.toString(32);
// const lessThan2 = number.toString(1);
// const greaterThan32 = number.toString(33);
const blank = number.toString();


console.log('Binary:' + ' ' + biner);
console.log('Octa:' + ' ' + octa);
console.log('Hexa:' + ' ' + hexa);
console.log('Deca:' + ' ' + decta);
// console.log(`lessThan2:' + ' ' + `,lessThan2);
// console.log('greaterThan32:' + ' ' +greaterThan32 );
console.log('blank:' + ' ' +blank);