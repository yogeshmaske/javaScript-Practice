// program to check if a number is prime or not


// take input from the user
// const number = parseInt(prompt("Enter a positive number: "));
const number =9;
let isPrime = true;

// cheack if num is equal to 1 or not
if(number==1){
    console.log("1 is nor a prime number and compositre number");
}else if(number>1){   //Cheak number is greater than 1
   
    for(let i=2;i<number;i++){
        if(number % i == 0){
            isPrime = false;
            break;
        }
    }

    
if(isPrime){
    console.log(`${number} is prime number`);
}else{
    console.log(`${number} is not a prime number`);
}
}else{  //cheack if number is lessthan 1

    console.log("Number is lessthan 1");
}
