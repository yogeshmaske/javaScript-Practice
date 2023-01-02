// Clone the Object

// Example 1. Clone the Object Using Object.assign()

// declaring object
const person = {
    name: 'John',
    age: 21,
};

// cloning the object

const person2 = Object.assign({},person);

console.log(person);
console.log(person2);
console.log(person2==person)


// Example 2: Clone the Object Using Spread Syntax

const person3 = {...person,...person2};
console.log(person3);