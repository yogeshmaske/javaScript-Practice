// program to check an Armstrong number of three digits


// const num =  prompt('Enter a three-digit positive integer: ');
// ?const num = 27;

// create a temparary variable

// let temp = num;

// while (temp>0) {
//     // finding the ones digit
//     let reminder = temp % 10;

//     // sum = sum + reminder*reminder*reminder;

//     sum +=  reminder*reminder*reminder;

//     // removing last digit from number
//    temp = parseInt(temp/10);
// }

// // cheack the condition 
// if (sum == num) {
//     console.log(`${num} is an Amstrong number`);
// }else{
//     console.log(`${num} is Not an Amstrong number`);
// }



for (let index = 9; index < 500; index++){
    let temp = index;
    let sum = 0;
    while (temp>0) {
        // finding the ones digit
        let numberOfDigits = index.toString().length;
        let reminder = temp % 10;
    
        // sum = sum + reminder*reminder*reminder;
    
        sum +=  reminder**(numberOfDigits);
    
        // removing last digit from number
       temp = parseInt(temp/10);
    //    console.log(sum)
    }
    
    // cheack the condition 
    if (sum == index) {
        console.log(`${index} is an Amstrong number`);
    }
    // else{
    //     console.log(`${index} is Not an Amstrong number`);
    // }
    

}
    
