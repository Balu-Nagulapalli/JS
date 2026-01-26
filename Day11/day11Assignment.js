console.log("Day 11 Assignment");

//1. What will be the output of the following code and why?
console.log("Answer 1");

function outer() {
    let count = 0;
    return function inner() {
        count++;
        console.log(count);
    };
}
const counter = outer();
counter();
counter();

/* Output: 
1
2

Explanation: outer() is called, count initialized with 0
outer returns inner() function. counter holds inner function.
on counter() first call count incremented to 1 and print 1
on counter() second call count will incremented to 2 and prints 2

*/



//2. What will be the output and why?
console.log("Answer 2");

function testClosure() {
    let x = 10;
    return function () {
        return x * x;
    };
}
console.log(testClosure()());

/* Output: 100
()() - One for return function, and another for return function Execute

Explanation: testClosure() will be invoked first and returns inner function,
The reurned function weii be executed, will calculate 10*10, return output as 100

*/



/*

3. Create a button dynamically and attach a click event handler using a closure.
The handler should count and log how many times the button was clicked.

*/

console.log("Answer 3");

function setUpButton() {
    let clickCount = 0;

    document.getElementById("myButton").addEventListener("click", function () {
        clickCount++;
        console.log(`Button clicked ${clickCount} times`);
    });
}

setUpButton();


/*

4. Write a function createMultiplier(multiplier) that returns 
another function to multiply numbers.

*/
console.log("Answer 4");

function createMultiplier(multiplier){
    return function innerrMultiply(num){
        return num * multiplier;
    }
}
const res = createMultiplier(5);
console.log(res(2));

//5. What happens if a closure references an object?
/*

Options

1. The object is garbage collected immediately
2. The object remains in memory as long as the closure exists
3. The object is automatically cloned
4. None of the Above.

Answer: Option 2 (2. The object remains in memory as long as the closure exists)
*/
console.log("Answer 5")
console.log("Option 2 (The object remains in memory as long as the closure exists)");




/*6. Write a function factory of counter to increment, decrement, and reset a counter.
Use closure to refer the count value across the functions.
*/

console.log("Answer 6");

function createCounter(initialValue){
    let count = initialValue;

    return {
        increment : () => {
            count++;
            console.log("Incremented value, Current Count= ", count);
        },

        decrement : () =>{
            count--;
            console.log("Decremented value, Current Count= ", count)
        },

        reset : () => {
            count=0;
            console.log("Count Reset, Current Count= ", count);
        },
    };
}

const countRes = createCounter(10);

console.log(countRes.increment()); //11 

console.log(countRes.decrement()); //10

console.log(countRes.decrement()); //9

console.log(countRes.decrement()); //8

console.log(countRes.reset()); //0
