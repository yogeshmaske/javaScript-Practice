// Check if Key Exists in Object Using in Operator

// program to check if a key exists
const person = {
    id:1,
    name:"jon",
    age:23
};

// Check if key exist or not

const hasKey = "name" in person;

if (hasKey) {
    console.log("Key is present in object")
}else{
    console.log("Key is not present in object")
}




// Example 2: Check if Key Exists in Object Using hasOwnProperty()
// program to check if a key exists


// Check if key exist or not
 
const hasKey1 = person.hasOwnProperty('name'); 

if (hasKey) {
    console.log("Key is present in object")
}else{
    console.log("Key is not present in object")
}