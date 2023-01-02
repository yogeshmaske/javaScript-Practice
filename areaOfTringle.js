// const baswValue = prompt("Enter a base value");
// const heightValue = prompt("Enter a height value");

// const area = (baswValue*heightValue)/2;

// console.log(`The area of Tringle is ${area}`);

// function hellow(){

// return "hellow edabit.com";
// }


var obj = {
    x:12,
    getX: function(){
        // console.log(this.x);
        return this.x<=15;
    }
};
// const output = obj.getX;
// console.log(obj.output);

// obj.getX();
// console.log(obj.x);
let output = obj.getX();
console.log(output);