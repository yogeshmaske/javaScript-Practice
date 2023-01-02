/* program to check whether the last digit of three
numbers is same */

// tree numbers 
const a= 15;
const b= 3559;
const c= 5557;

// find the last digit
const result1 = a % 10;
const result2 = b % 10;
const result3 = c % 10;

console.log("Last digit is",result1);
console.log("Last digit is",result2);
console.log("Last digit is",result3);

// // compare the last digits
if (result1 == result2 && result1==result3 ) {
    console.log(`${a}, ${b} and ${c} have the same last digit.`)
}
else {
        console.log(`${a}, ${b} and ${c} have different last digit.`);
    }




// if(result1 == result2 && result1 == result3) {
//     console.log(`${a}, ${b} and ${c} have the same last digit.`);
// }
// else {
//     console.log(`${a}, ${b} and ${c} have different last digit.`);
// }
