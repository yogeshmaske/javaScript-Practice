// The positive integers 1, 2, 3, ... are known as natural numbers.

// program to display the sum of natural numbers
//  let sum = 0;
//  let num = 5;
 // looping from i = 1 to number
// in each iteration, i is increased by 1

// for (let i = 0; i <=num; i++) {
      
//     //  sum = sum + i;

//      sum +=i;
    
// };

// console.log(sum);


function sum(num) {
    add = 0;
    for (let i = 0; i <=num; i++) {
      
        //  sum = sum + i;
    
         add +=i;
        
    };   
    console.log(add);
};
 sum(5);
 sum(9);
 sum(15);sum(25);