// Convert First letter to UpperCase
// program to convert first letter of a string to uppercase

function capFirstLet(str) {
    
    const capitilized = str.charAt(0).toUpperCase() + str.slice(1);

    return capitilized;
}

console.log(capFirstLet("javaScript"));
