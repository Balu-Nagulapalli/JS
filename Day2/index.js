console.log("Day 02");

//Variables are used to contain data 

// var - function scoped, can be re-declared, updated
// let - block scoped, can be re-assigned, updated
// const - block scoped, cannot be re-assigned, cant be re-declared

let address = "Amalapuram";

console.log(address);

address = "Vadaparru";

console.log(address);

/* Primitive Data Types:
    1. String - sequence of characters -  "Hello", 'A', "1234"
    2. Number - numeric values - 123, 12.34
    3. Boolean - true or false
    4. Undefined - variable declared but not assigned a value. Ex let name, let salary;
    5. Null - represents intentional absence of any object value. Ex let age = null;
    6. BigInt - used for very large integers
    7.Symbol - used to create unique identifiers for objects (Symbol('id'))

    Non-Primitive Data Types:

    objects - used to store collections of data and more complex entities.
    arrays - used to store multiple values in a single variable.
    Functions - block of code designed to perform a particular task.
*/  

let student={
    name: "Balu",
    age: 20,
    isGraduated: false
}
console.log(student.isGraduated);


let arr = [10, 20, 30, 40, 50];
console.log(arr[2]);
console.log(arr);