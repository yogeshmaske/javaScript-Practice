// JavaScript Program to Find Sum of Natural Numbers Using Recursion

// The positive integers 1, 2, 3, ... are known as natural numbers.

const number = 10;

function sum(num){

    if (num>0) {
        return num + sum(num-1);
    }
    else{
      return num;
    }
};

const result = sum(number);

console.log(result)