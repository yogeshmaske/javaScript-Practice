// JavaScript Program to Create Objects in Different Ways

// You can create an object in three different ways:

// Using object literal
// By creating instance of Object directly
// By using constructor function

// Example 1: Using object literal

// program to create JavaScript object using object literal

// const person ={
//     name:'Yogesh',
//     age:25,
//     hobbies:['Reading','Coding'],
//     greet:function(){
//         console.log("Hellow Every one");
//     },
//     score:{
//         Mca:71,
//         Bca:74
//     }

// };

// console.log(typeof person);

// // Acessing the object values 

// console.log(person.name,person.age);//Simple values
// console.log(person.hobbies[0]);//Acessing Array values
// console.log(person.score.Mca);//Acessing Object values
// person.greet();//Acessing Method



// The syntax for creating an object using instance of an object is:
// const objectName = new Object();


// Example 2: Create an Object using Instance of Object Directly

// const person = new Object({
//     name:"Yogesh",
//     age:25,
//     hobbies:['Coding','Reading'],
//     score:{
//         MCA:71,
//         BCA:74
//     },
//     greet:function () {
//         console.log("Hellow Everyone");
//     }
// });

// console.log(typeof person);

// // Accessing Values from object 

// console.log(person.name,person.age);
// // Accessing aray values from object
// console.log(person.hobbies[0]);
// // Accessing object values from object 
// console.log(person.score.MCA);
// // Accessing method from Object
// person.greet();








// Example 3: Create an object using Constructor Function

// program to create JavaScript object using instance of an object

function Person() {
    this.name = 'Yogesh'
    this.age = 25,
    this.hobbies = ['Coding','Reading'],
    this.greet =function(){
        console.log("Hellow Everyone");
    },
    this.score= {
        mca:71,
        bca:74
    }
}

const person = new Person(); // creating object using a constructor function

//Accessing object values
console.log(person.name,person.age);

// Accessing array value
console.log(person.hobbies[0]);

// Accessing object values
console.log(person.score.mca);

// Accessing method
person.greet();4






