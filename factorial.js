// program to find the factorial of a number
let number =-1;

let fact =1;
  
if(number<0){
    console.log("Error please Enter positive number");
}
else if(number==0){
    console.log("factorial for zero is one")
}else{
    let fact =1;
    for(i=1;i<=number;i++){
        // fact =fact*i;
        fact *=i;
    }
    console.log(`The factorial of ${number} is ${fact}.`);
}


// for(i=1;i<=number;i++){
//     // fact =fact*i;
//     fact *=i;
// }
// console.log(`The factorial of ${number} is ${fact}.`);