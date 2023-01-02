// Example 2: Check occurrence of a character using a Regex

// program to check the occurrence of a character

function countString(str,char){

    // creating regex 
    const re = new RegExp(char,'g'); //  /o/,'g'

    // matching the pattern
    const count = str.match(re).length;

    return count;
}

const string = "school is so far from home"
const letterToCheck = "o"


//passing parameters and calling the function
const result = countString(string, letterToCheck);

// displaying the result
console.log(result);