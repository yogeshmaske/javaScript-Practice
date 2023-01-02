// Count the Number of Vowels Using for Loop
// program to count the number of vowels in a string

// defining vowels
const vowels = ["a", "e", "i", "o", "u"];

function countVowel(str) {
    
     // initialize count
     let count = 0;

     // loop through string to test if each character is a vowel
     for(let letter of str.toLowerCase()){

       if (vowels.includes(letter)) {
        count += count;
       }

     }
     // return number of vowels
    return count
};


console.log(countVowel("JavaScript program"));