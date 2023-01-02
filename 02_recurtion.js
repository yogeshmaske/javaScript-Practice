// JavaScript Program to Display Fibonacci Sequence Using Recursion
// A fibonacci sequence is written as:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, ...


function fab(num) {
    
    if (num<2) {
        return num;
    }else{
        return fab(num-1) + fab(num-2);
    }

};

let number = 15;

for(let i=0;i<number;i++){
    console.log(fab(i));
}