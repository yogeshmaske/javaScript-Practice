
// Example 1: Merge Property of Two Objects Using Object.assign()
// program to merge property of two objects

// object 1
const person = {
    name: 'Jack',
    age:26
}

// object 2
const student = {
    gender: 'male'
}

// merge two objects
const newObj = Object.assign(person,student);

console.log(newObj);


// Example 2: Merge Property of Two Objects Using Spread Operator
// program to merge property of two objects

// merge two objects
const newObj1 = {...person, ...student};

console.log(newObj1);