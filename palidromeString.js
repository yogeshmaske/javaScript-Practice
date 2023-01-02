// A string is a palindrome if it is read the same from forward or backward. For example, dad

// program to check if the string is palindrome or not

function checkPalindrome(string) {
    
     // find the length of a string

     let len = string.length;

     // find the length of a string
     for (let i = 0; i <len/2; i++) {
        
        // check if first and last string are same
        if (string[i] !== string[len-1-i]) {
            return 'It is not a palindrome';
        }  
     }
     return 'It is a palindrome';

    }

   string = "dad";

    // call the function
 
 console.log(string,checkPalindrome(string));

string="yoggoy";

console.log(string,checkPalindrome(string));