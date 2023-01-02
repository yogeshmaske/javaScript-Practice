// Loop Through Object
// Example 1: Loop Through Object Using for...in

const student = { 
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
};

// using for...in
for (const key in student) {
    let value;
    // get the value
    value = student[key];
    // value = student.key;// it will give undefined because --- there is no any key of name "key" is availeble
    console.log(key + " - " +  value); 
};




// Note: The for...in loop will also count inherited properties.

// For example,

const person = {
    gender: 'male'
}

// inheriting property
student.__proto__ = person;

for (let key in student) { 
    let value;

    // get the value
    value = student[key];

    console.log("from using proto",key + " - " +  value);
} 



// Example 2: Loop Through Object Using Object.entries and for...of
// using Object.entries
// using for...of loop

for (const [key,value] of Object.entries(student)) {
    console.log(" using obj.ent",key + " - " +  value);
}