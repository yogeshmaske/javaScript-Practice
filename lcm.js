// program to find the LCM of two integers

// The Least Common Multiple (LCM) of two integers is the smallest positive integer that is perfectly divisible by both integers.

// For example, the LCM of 6 and 8 is 24.

const num1 = 6;
const num2 = 7;


// higher number among number1 and number2 is stored in min
let min = (num1 > num2) ? num1 : num2;

// while loop
while (true) {
    

    if (min%num1 == 0 && min%num2==0) {
        console.log(`The LCM of ${num1} and ${num2} is ${min}`);
        break;
    }
    min++;
};




// using another logic 

// let hcf;

// const num1 = 8;
// const num2 = 6;

// // looping from 1 to number1 and number2
// for (let i = 1; i <=num1 && i<=num2; i++) {
    
//     // check if is factor of both integers
//     if (num1%i == 0 && num2%i ==0) {
//         hcf =i;
//     }
// };

// console.log(hcf);

// // find LCM
// let lcm = (num1 * num2) / hcf;

// // display the hcf
// console.log(`LCM is ${lcm}.`);