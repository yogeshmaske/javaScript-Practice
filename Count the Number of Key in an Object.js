
// Example 1: Count the Number of Key in an Object Using for...in
// program to count the number of keys/properties in an object

const student = { 
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
};

student.color = "gray";
let count = 0;

// loop through each key/value

for (const key in student) {
    
    // increse the count 
    count++;
};

console.log("Number of keys in object:",count)


// >>>>>>> it will also count inherited

count=0;
const person = {
    gender: 'male'
}

student.__proto__ = person;

for (const key in student) {
    
    // increse the count 
    count++;
};

console.log("Number of keys in object:",count)



// Example 2: Count the Number of Key in an Object Using Object.key()
// program to count the number of keys/properties in an object

// count the key/value
const result = Object.keys(student).length;

console.log(result);