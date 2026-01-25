console.log("Welcome to Day 10!");
//Global Scope-Variables declared outside of any function or any block scope are in a global scope.
var names= 'Balu';

function greetings(){
    console.log('Hello ',names);
}
greetings();

console.log(names);

{
    console.log('Inside a Block', names);
}


//Function Scope -  Variables declared inside a function are only accessible with in that function.

function toDo(){
    var task = "Learning 40 Days of JS";
    console.log(task);
}

toDo();

//console.log(task);

//Block Scope: Variables declared inside a block (using {}) cannot be accessed outside the block.

{
    var count = 10;
    console.log(count);
}
console.log(count);

console.log("Scope Chain");
//Scope Chain
let globalVar="I am a Global Variable";

function outer(){
    let outerVar="I am Outer Variable";

    function inner(){
        let innerVar="I am an Inner Variable";

        console.log(innerVar);
        console.log(outerVar);
        console.log(globalVar);
    }
    inner();
}
outer();

//console.log(outerVar); //Reference Error, because we are trying to sccess the variable in function, outside the the function


//Example
console.log("New Example:")
var countt = 10;

function outerr(){
    var countt=20;

    function innerr(){
        var countt = 30;
        console.log(countt); //30
    }
    innerr();
    console.log(countt); //20
}
outerr();
console.log(countt); //10

//Variable Shadowing
/*
Variable Shadowing happens when a variable declared in an 
inner scope has the same name as a variable in an outer scope.
The inner variable “shadows” (hides) the outer variable.
*/

let message="I am Doing Great";
function situation(){
    let message="I am Not Great";
    console.log(message);
}

situation();
console.log(message);