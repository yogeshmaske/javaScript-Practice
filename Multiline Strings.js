// Example 3: Create Multiline Strings Using Template Literal
// program to create a multiline strings

// using the template literal

// const message = `This is a long message
// that spans across multiple lines
// in the code.`

// console.log(message);


// // Example 2: Create Multiline Strings Using \
// // program to create a multiline strings

// // using the \ operator
// const messag = 'This is a long message\n \
// that spans across multiple lines\n \
// in the code.'

// console.log(messag);


// program to format numbers as currency string

const result =  (2500).toLocaleString('AB', {
    style: 'currency',
    currency: 'INR'
});

console.log(result);