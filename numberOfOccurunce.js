// Example 1: Check Occurrence of a Character Using for Loop

// program to check the number of occurrence of a character

function countChar(str,char) {
    
    let count = 0;

    // looping through the items
    for(let i=0;i<str.length;i++){
        // check if the character is at that position
        if (str.charAt(i)==char) {
            count += 1;
        }
    }
    return count;
};


const string = "school is so far from home";
const letterToCheck = "c";

//passing parameters and calling the function
const result = countChar(string, letterToCheck);

// displaying the result
console.log(result);