// program to generate fibonacci series up to n terms

// take input from the user
// const number = parseInt(prompt('Enter the number of terms: '));
// const number = 10;

// let n1=0, n2=1, nextTerm;
// console.log("Fabonnaci Series is:");

// // 0, 1, 1, 2, 3, 5, 8, 13, 21, ... 

// for(i=0;i<=number;i++){
//    console.log(n1);
//    nextTerm = n1+n2;
//    n1 = n2;
//    n2 = nextTerm;
   
    
// }




// program to generate fibonacci series up to a certain number

// take input from the user
// // const number = parseInt(prompt('Enter a positive number: '));

// const number = 10;
// let n1 = 0, n2 = 1, nextTerm;

// console.log('Fibonacci Series:');
// console.log(n1); // print 0
// console.log(n2); // print 1

// nextTerm = n1 + n2;

// while (nextTerm <= number) {

//     // print the next term
//     console.log(nextTerm);

//     n1 = n2;
//     n2 = nextTerm;
//     nextTerm = n1 + n2;
// }


let n1= 0 , n2 = 1, nextTerm;
let num =10;
for (let i = 1; i <=num; i++) {
    console.log(n1);
    nextTerm = n1+n2;
    n1 = n2;
    n2 = nextTerm;
    
}
