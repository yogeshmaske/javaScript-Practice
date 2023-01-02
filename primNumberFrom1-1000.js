// // program to find a prime number from 1-1000


// // for(let i=2;i<=100;i++){

// //     let notPrime = true;
// //     for(let j=2;j<=i;j++){
    
        
// //         if(i%j===0 && j!==i){
// //             notPrime = false;
// //             // break;
// //         }
        
// //     }
// //     if(notPrime === true){
// //         console.log(i,"is a prime number");
// //         }
    
// // }

// // for (var counter = 0; counter <= 100; counter++) {

// //     var isPrime = true;
// //     for (var i = 2; i <= counter; i++) {
// //         if (counter%i===0 && i!==counter) {
// //             notPrime = false;
// //         }
// //     }
// //     if (isPrime === true) {
// //                 console.log(counter);
// //     }
// // }



// let lNum = 0;
// let hNum = 100;

// for (let i =lNum; i <=hNum; i++) {
//     let isPrime = true;
//     for(j=2;j<i;j++){
//         if (i%j==0 && i!==j) {
//             isPrime = false;
            
//         }

//     };
//     if (isPrime) {
//         console.log(`${i} is Prime Number`);
//     } 
        
    
    
// }

function factorial(x) 
{ 

  if (x === 0)
 {
    return 1;
 }
  return x * factorial(x-1);
         
}
console.log(factorial(9));