console.log("Hello, Day 6 Assignment!");

console.log("1. Write a Function to Convert Celsius to Fahrenheit");
function celsiusToFahrenheit(celsius){
    return (celsius * 9/5) + 32;
}
console.log(celsiusToFahrenheit(25));

console.log("2. Create a Function to Find the Maximum of Two Numbers")
/* Write a function findMax(num1, num2) that returns the larger of the two numbers. 
It should work for negative numbers as well.*/

function findMax(num1, num2){
    return (num1 > num2) ? num1 : num2;
}
console.log(findMax(10, -10));

console.log("3. Function to Check if a String is a Palindrome");

/* Create a function isPalindrome(str) that checks if a given string is a 
palindrome (reads the same forward and backward).You can not use any 
string function that we have not learned in the series so far. */

function isPalindrome(str){
    str = str.toLowerCase();
    let left=0; right=str.length - 1;
    while(left < right)
    {
        if(str[left]!=str[right])
        {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
console.log(isPalindrome("Balu"));
console.log(isPalindrome("Madam"));

console.log("4. Write a Function to Find Factorial of a Number");
//Create a function factorial(n) that returns the factorial of n. Example 5! = 5 * 4 * 3 * 2 * 1

function factorial(n){
    if(n===0 || n===1)
    {
        return 1;
    }
    let fact = 1;
    for(let i=2; i<=n; i++)
    {
        fact *= i;
    }
    return fact;
}
console.log("Factorial of 5 " + factorial(5));

console.log("5. Write a function to Count Vowels in a String");
// Write a function countVowels(str) that counts the number of vowels (a, e, i, o, u) in a given string.

function countVowels(str){
    let count = 0;;
    for(let i=0; i<str.length; i++)
    {
        if(str.charAt(i) === 'a' || str.charAt(i) === 'e' || str.charAt(i) === 'i' || str.charAt(i) === 'o' || str.charAt(i) === 'u' )
        {
            count++;
        }
    }
    return count;
}
console.log("Number of Vowels in 'Hello World': " + countVowels("Hello World"));


console.log("6. Write a Function to Capitalize the First Letter of Each Word in a Sentence");
/* Write a function capitalizeWords(sentence) that takes a sentence and capitalizes the first letter of each word. You can use the 
toUpperCase() method of string to convert the lowercase to uppercase.*/

function capitalizeWords(sentence){
    let words = sentence.split(" ");
    for(let i=0; i<words.length; i++)
    {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
}
console.log(capitalizeWords("hello world"));


console.log("7. Use an IIFE to Print Hello, JavaScript!");
/* Write an IIFE that prints "Hello, JavaScript!" to the console. 
Here the Second word must be supplied using paramneter and argument */

(function greet(language){
    console.log("Hello, " + language + "!");
})("JavaScript");

console.log("8. Create a Simple Callback Function");
//Write a function greet(name, callback), where callback prints a message using the name parameter.

function greet(name, callback){
    callback(name);
}
function message(name)
{
    console.log("Hello " + name);
}
greet("Balu", message);

console.log("9.Create Call Stack Execution Diagram for this flow");

/* 
function f1() {}
function f2() {
    f1();
}
f2();
*/
console.log(" 9th Answer")
/*

f2() goes inside the call stack and started executing
In side f2() we have another function f1(), 
Now f1() goes inside call stack
f1() executed and removed from call stack
In Final, f2() is removed from call stack
Empty call stack

*/



console.log("10.Create Call Stack Execution Diagram for this flow");

/* 
function f1() {}
function f2() {}
function f3() {
    f1();
}
f2();
f3();
f1();
*/

console.log("10th Answer");

/*

f2() enters the call stack and started executing
f2() completed execution and removed from call stack
Now, f3() entered the call stack and started ececution
In side f3() another function f1() is there
So, f1() enter the stack and started execution
f1() completes the execution and removed from call stack
Now, f3() completed its execution and removed from call stack
Again f1() is called. So, f1() is enters the stack and started execution.
f1() completed the execution and removed from the call stack
Finally Call Stack is Empty
*/