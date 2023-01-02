// console.log('2-max-number');

// function findMaxNumber(num1, num2){
//   // 1. long syntax
//   /* if(num1 > num2){
//     return num1
//   } else {
//     return num2
//   } */

//   // 2. short syntax
//   /* if(num1 > num2) return num1;
//   else return num2; */

//   // 3. ternary short syntax
//   return (num1 > num2) ? num1 : num2;
// }

// let checkMax1 = findMaxNumber(10, 5);
// console.log('Max Number:',checkMax1);

// let checkMax2 = findMaxNumber(10, 15);
// console.log('Max Number:',checkMax2);

// let checkMax3 = findMaxNumber(100, 100);
// console.log('Max Number:',checkMax3);



function isfizzBuzz(arg){
    if(typeof arg !== 'number'){
      return ('Nan - Not a Number! Please Input Number');
    }
  
    if((arg % 3 === 0) && (arg % 5 === 0)) {
      return 'FizzBuzz';
    }
  
    if(arg % 3 === 0) {
      return 'Fizz';
    }
  
    if(arg % 5 === 0) {
      return 'Buzz';
    }
  
    else {
      return 'Some odd number entered: ' + arg;
    }
  
  }
  
  let checkFizzBuzz1 = isfizzBuzz('one');
  console.log(checkFizzBuzz1);
  
  let checkFizzBuzz2 = isfizzBuzz(true);
  console.log(checkFizzBuzz2);
  
  let checkFizzBuzz3 = isfizzBuzz(9);
  console.log(checkFizzBuzz3);
  
  let checkFizzBuzz4 = isfizzBuzz(10);
  console.log(checkFizzBuzz4);
  
  let checkFizzBuzz5 = isfizzBuzz(30);
  console.log(checkFizzBuzz5);
  
  let checkFizzBuzz6 = isfizzBuzz(11);
  console.log(checkFizzBuzz6);