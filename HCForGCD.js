// program to find the HCF or GCD of two integers

let hcf;

const num1 = 8;
const num2 = 6;

// looping from 1 to number1 and number2
for (let i = 1; i <=num1 && i<=num2; i++) {
    
    // check if is factor of both integers
    if (num1%i == 0 && num2%i ==0) {
        hcf =i;
    }
};

console.log(hcf);

// find LCM
let lcm = (num1 * num2) / hcf;

// display the hcf
console.log(`LCM is ${lcm}.`);