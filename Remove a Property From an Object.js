// Remove a Property From an Object
// program to remove a property from an object

// creating an object
const student = {
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
    greet: function() {
        console.log('Hello everyone.');
    },
    score: {
        maths: 90,
        science: 80
    }
};

// deleting a property from an object

delete student.greet; // We have deleted function here from object

delete student["score"] // We deleted nested object from student
// delete student.score;
console.log(student)