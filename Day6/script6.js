console.log("Hello, Day 6!");

//Define or Declare a Function
function printThis()
{
    console.log("Printing from Day 6 script!");
}

//Call or Invoke the Function
printThis(); //Semicolon is optional here


//Function as an Expression
let printMe = function()
{
    console.log("Printing from Function Expression printMe()!");
}

//Function Call
printMe();
console.log(printMe); //function


//Parameters and Arguments
//Parameters  are the variables that we pass as an input to a function while declaring or defining a function.
function sum(a, b) //a, b are Parameters, Parameters are also called Placeholders.
{
    const result = a + b;
    //console.log("Sum is:", result); 
    return result;
}

let result = sum(2, 8); // Arguments - The actual value that will replace those declared variables while calling the function.
function double(x){
    return 2 * x;
}
console.log(double(result));
//return statement - Sends value back to the function call and exits the function.


//Default Parameters - A Parameter that has a default value if no argument is passed while calling the function.
// If you give only one argument while calling calc(2), b will take default value 0.
//If you give two arguments while calling calc(2,7), b will take 7. First b value is overridden by second value.
function calc(a, b=0)
{
    return (2*(a+b));
}
let res = calc(2, 7); 
console.log(res); 



//Rest Parameters - Used to represent an indefinite number of arguments as an array.
function calculateThis(x, y, z,...Rest)
{
    console.log(x, y, Rest);
    console.log("x:", x);
    console.log("y:", y);
    console.log("z:", z);
    console.log("Rest Parameters:", Rest);
}
calculateThis(1, 2, 3, 4, 5, 6, 7, 8, 9); //9 arguments
//Rest parameters must be the last parameter. Not in First or Middle.



//Nested Functions - Function inside a function

//outerFunction - The Function which holds another function inside it, is called innerFunction.

//innerFuction - The Function which is defined inside another function is called innerFunction.

function outerFunction()
{
    console.log("Outer Function");
    return function innerFunction()
    {
        console.log("Inner Function");
    }
    //innerFunction(); //Calling innerFunction inside outerFunction
}
let rettFun = outerFunction(); //Calling outerFunction which in turn calls innerFunction
console.log(rettFun()); //function innerFunction()

//Callback Function - A Function passed as an argument to another function.

const toCallBack = true;
function foo(func)
{
    console.log("foo");
    if(toCallBack){
    func();
    }
}
// Name not given name to function - it is known as anonymous function

/* 
let func = function(){
    console.log("buzz");
} */

foo(function(){
    console.log("buzz");
})

/* const buz = function() {
    console.log("buz");
}
foo(buz); */

//Pure Function - A Function that, given the same input, will always return the same output and does not have side effects.


function greeting(name){
    return "Hello " + name;
}
console.log(greeting("Balu")); 
console.log(greeting("Balu")); 
console.log(greeting("Balu")); 
console.log(greeting("Balu")); 
console.log(greeting("Balu")); 
 

//Impure Function - A Function that may produce different outputs for the same input or has side effects.
console.log(" *** Impure Function *** ");
let greetingsMsg = "Hola ";
function greetings(names){
    return greetingsMsg + names;
}
console.log(greetings("Balu"));
console.log(greetings("Balu"));

greetingsMsg = "Namaste ";

console.log(greetings("Balu"));
console.log(greetings("Balu"));
console.log(greetings("Balu"));

//Higher Order Function - A Function that takes another function as an argument or returns a function as a result.
console.log(" *** Higher Order Function *** ");
function getCamera(camera){
    camera();
}
getCamera(function(){
    console.log("Sona Camera");
})

function returnFunc(){
    return function(){
        console.log("Hlo");
    }
}
const retFun=returnFunc();
retFun();

//Arrow Functions - A shorter syntax for writing function expressions.

/* Normal Way
let greetMe = function() {
    console.log("Hello from greetMe function");
} */
console.log(" *** Arrow Function *** ");
let greetMe = (greetingsMsgs) => {
    console.log(greetingsMsgs);
    return greetingsMsgs + "Great!";
} 
console.log(greetMe("Hola "));

//if there is only one parameter, we can skip the parentheses
/* let greetMe = greetingsMsgs => {
    console.log(greetingsMsgs);
}  */
//if there is only one statement in the function body, we can skip the curly braces and the return keyword
/* let greetMe = greetingsMsgs => console.log(greetingsMsgs); */


//IIFE - Immediately Invoked Function Expression
console.log(" *** IIFE - Immediately Invoked Function Expression *** ");
(function(){
    console.log("IIFE Function");
})();
//OR
(function(name){
    console.log("IIFE Function with name:", name);
})("Balu");

//Recursive Function - A Function that calls itself.
console.log(" *** Recursive Function *** ");

/* function foo(){
    foo();
} */

function fetchWater(count){
    if(count === 0){
        console.log("No more water to fetch!");
        return;
    }
    console.log("Fetching Water....", count);

    fetchWater(count - 1);
}
fetchWater(5);