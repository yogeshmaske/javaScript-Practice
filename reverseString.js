// Example 1: Reverse a String Using for Loop
function revStr(str) {
    //Empty string
    let newStr = "";

    for(let i = str.length-1;i>=0;i--){

        // newStr = newStr + str[i];
        newStr = newStr.concat(str[i])
    }
    return newStr;
};
let str = "I am a JavaScript Developer";
console.log(revStr(str))