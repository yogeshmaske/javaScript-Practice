// Example: Factors of Positive Number

// To be the factors of a number, the factor number should exactly divide the number (with 0 remainder). For example,

// The factor of 12 is 1, 2, 3, 4, 6, and 12.

// program to find the factors of an integer

// take input
// const num = prompt('Enter a positive number: ');


const num = 12;

// looping through 1 to num

for (let i = 0; i <=num; i++) {
    
    // check if number is a factor
    if (num%i==0) {
        console.log(i);
    }
    
};