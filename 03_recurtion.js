// program to find the factorial of a number using recurtion

function fact(num) {
    // if number is 0
    if (num==0) {
        return 1;
    }// if number is positive
    else{
        return num*fact(num-1);
    }
};
let num = 3;
const result =fact(num);

console.log(`factorial ${num} is ${result}`);
