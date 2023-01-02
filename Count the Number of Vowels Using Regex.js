// Count the Number of Vowels Using Regex
// program to count the number of vowels in a string

function countVowels(str) {
    // find the count of vowels
    const count = str.match(/[aeiou]/gi).length;

    // return number of vowels
    return count;
}

console.log(countVowels("JavaScript program"));