console.log('Welcome to Day 10 Assignment of JS');

//1. What will be the output of the following code and why?
console.log('Answer 1');
let user = "Alice";

function outerr() {
    function innerr() {
        console.log(user);
    }
    let user = "Bob";
    innerr();
}

outerr();

/*Output: Bob
FEC inner Execution phase it is initialized with Bob, 
and prints opt as bob
*/




//2. What is the mistake in the code below?
console.log('Answer 2');
let total = 0; // Global, bad practice

function add(num) {
    total += num;
}

add(5);
add(10);
console.log(total);

/*
o/p: 15
Mistake: Declaring of Total variable in Global Scope
and modified inside the function
*/



//3. Create a function with a nested function and log a variable from the parent function.
console.log('Answer 3');

function parent(){
    let variablee="I am a Parent Function Variable";
    function child(){
        console.log(variablee);
    }
    child();
}
parent();

//Output: I am a Parent Function variable





//4. Use a loop inside a function and declare a variable inside the loop. Can you access it outside?
console.log('Answer 4');

function loops(){
for(let i=1; i<=5; i++){
    var loop_inside="I am inside Loop";
}
    console.log(loop_inside);
}

loops();

/*
o/p: Reference Error with let
 As it is unaccessible due to let is a block scoped.

 If we replace let with var means it will work and prints output
*/





//5. Write a function that tries to access a variable declared inside another function.
console.log('Answer 5');

function original(){
    let original_variable="I am Original";
    function another_function(){
        console.log(original_variable);
    }
    another_function();
}
original();

//o/p: I am Original





//6. What will be the output and why?
console.log('Answer 6');

//console.log(a);
let a = 10;
console.log('Out Put commented due to Reference Error');
//Referrence Error Because of we are trying to access the variable a with let before initializing






//7. Where is the age variable accessible?
console.log('Answer 7');

function showAge() {
    let age = 25;
    console.log(age);
}

//console.log(age);

/*
Options:

A: In Global
B: Only inside showAge
C: It will cause an error
D: None of the above
*/
console.log('Option B');
//Answer: Option B Only inside showAge(), Because of Function Scoped






//8. What will be the output and explain the output?
console.log('Answer 8');

let message = "Hello";

function outerrr() {
    let message = "Hi";

    function innerrr() {
        console.log(message);
    }

    innerrr();
}

outerrr();
//op: Hi
/* Explanation:
Initially message = "Hello", Execution Starts from outer function.
inside outer function message = "Hi", went to innter function,
In inner function there is not variable message, Goes to outer()
scope found message="Hi", prints Hi and Stops search
*/






//9. What will be the output and why?
console.log('Answer 9');

let x = "Global";

function outer() {
    let x = "Outer";

    function inner() {
        let x = "Inner";
        console.log(x);
    }

    inner();
}

outer();
//Output: Inner
/*Explanation:
Starts Execution by x="Global", goes through outer function,
then x = "Outer", and then Goes through inner() function
then x="Inner", prints Inner and stots Execution
*/



//10. What will be the output and why?
console.log('Answer 10');

function counter() {
    let count = 0;
    return function () {
        count--;
        console.log(count);
    };
}

const reduce = counter();
reduce();
reduce();

/*
o/p:
-1
-2

Explanation: 
First reduce() will execute and goes in, decrement the count to -1, and print same repeat will 
recall reduce() and decrement and print -2
*/