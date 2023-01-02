// Example 2: Check Palindrome using built-in Functions
// program to check if the string is palindrome or not


function checkPalindrome(string) {

   // convert string to an array
   const arrVal = string.split('');
   console.log(`string converted to array is ${arrVal}`);
   
   // reverse the array values
   const revArr = arrVal.reverse(); 
   console.log(`reversed array is ${revArr}`); 
   
   // convert array to string
   const revstr = revArr.join('');
   console.log(` converted array to string is ${arrVal}`);

   if(string == revstr){
    console.log('It is a palindrome');
   }
   else{
    console.log('It is not a palindrome');
   }
};

string = "dad"; checkPalindrome(string);
string = "yogesh"; checkPalindrome(string); 
