// Given the string, check if it is a palindrome.
// Definition of a palindrome:
// A string that doesn't changed when reversed (it reads the same backward and forward).



// Example

// For inputString = "aabaa", the output should be
// solution(inputString) = true;
// For inputString = "abac", the output should be
// solution(inputString) = false;
// For inputString = "a", the output should be
// solution(inputString) = true.


//Code Block

function solution(inputString) {
    a = inputString;
    b = inputString.split("").reverse().join("");
    
    if (a === b ) return true;
    else return false;
    console.log(b)
}