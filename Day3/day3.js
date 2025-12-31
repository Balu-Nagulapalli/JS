console.log("Welcome to Day 3");

//Operators
//operands - x + y, here x and y are operands
//operators - x + y, here + is operator
//Expression - combination of operands and operators that evaluates to a value. Ex: x + y, a * b, etc


// Arithmetic Operators: +, -, *, /, %, ++, --
let a=2;
let b=3;

console.log("a + b =", a + b); 
console.log("a - b =", a - b);
console.log("b - a =", b - a);
console.log("a * b =", a * b);
console.log("a / b =", a / b);
console.log("a % b =", a % b);
console.log(a ** b) //Exponential

let count=5;

//Increment
console.log("Post INC Count++", count++); //OP-5  //Post-increment: returns the value before incrementing
console.log("Post INC Res", count);   //OP-6 Incremented value

console.log("Pre INC",++count); //OP-7  //Pre-increment: increments the value first, then returns the incremented value

//Decrement
console.log("Post DEC", count--);   //Post-decrement: returns the value before decrementing
console.log("Post DEC Res", count); //OP-6 Decremented value

console.log("Pre DEC", --count); //Pre-decrement: decrements the value first, then returns the decremented value

console.log("Assignment Operators: =, +=, -=, *=, /=, %=");

let c=10;
c += 5; //c = c + 5
console.log("c += 5:", c);
c -= 3; //c = c - 3
console.log("c -= 3:", c);
c *= 2; //c = c * 2
console.log("c *= 2:", c);
c /= 4; //c = c / 4
console.log("c /= 4:", c);
c %= 3; //c = c % 3
console.log("c %= 3:", c);  

console.log("**** Comparison Operators: ==, ===, !=, !==, >, <, >=, <= ****");

console.log("4==5",4==5);  //false
console.log("0 == false", 0==false);  //true
console.log("3 == '3'", 3=='3'); //true Comparing Number  3 and String 3 and giving true

console.log("4==='4'",4==='4'); //false  Strict Equality operator compares both value and type
console.log("Null === Null",null === null); //true
console.log("undefined === undefined",undefined===undefined);   //true

// Nan = Not a Number

console.log("NaN === NaN", NaN === NaN); //false
let obj1 = {'Name': 'Balu'};
let obj2 = {'Name': 'Balu'};
console.log("Obj1 === obj2", obj1 === obj2); //false
console.log("Obj1 !== obj2", obj1 !== obj2); //true
console.log("3!=='3'", 3!=='3'); //true


console.log("*** Logical Operators: AND (&&), OR (||), NOT (!), Nullish Coalescing Operator(??) ***");
console.log("true && true:", true && true); //true
console.log("true || false:", true || false); //true

console.log("Cow && Horse", "Cow" && "Horse"); //Horse
console.log("Cow || Horse", "Cow" || "Horse"); //Cow

console.log("!true:", !true); //false
console.log("!false:", !false); //true

console.log(" ***Nullish Coalescing Operator (??)***");
//NOTE: If the first operand is Null or Undefined then only it will return second operator. else it will return first operand.
console.log("null ?? 'Default Value':", null ?? "Default Value"); //Default Value
console.log("undefined ?? 'Default Value':", undefined ?? "Default Value");
console.log("'Hello' ?? 'Default Value':", "Hello" ?? "Default Value");
console.log(" 'Default Value' ?? 'Hello':", "Default Value" ?? "Hello");

console.log(" null ?? 'Default Value':", null ?? "Default Value"); //Default Value
console.log(" undefined ?? 'Default Value':", undefined ?? "Default Value"); //Default Value
console.log(" false ?? 'Default Value':", false ?? "Default Value"); //false
console.log(" 0 ?? 'Default Value':", 0 ?? "Default Value"); //0

console.log(" ***Conditional Ternary Operator***");
//condition ? expression1 : expression2
let age = 26;

let res = age >=60 ? "Senior Citizen" : "Non Senior Citizen";
console.log("Age:", age, res);

console.log(" ***Bitwse Operators : &, |, ^, ~, <<, >> *** ");

//15 = 1111
//9  = 1001
// 15    &    9 
// 1111  &   1001
//Ans : 1001 = 9


console.log(" Bitwise AND 15 & 9:", 15 & 9); 
console.log(" Bitwise OR 15 | 9:", 15 | 9);
console.log(" Bitwise XOR 15 ^ 9:", 15 ^ 9);
console.log(" Bitwise NOT ~15:", ~15);
console.log(" Bitwise NOT ~9:", ~9);
console.log(" Left Shift 15 << 2:", 15 << 2);
console.log(" Right Shift 15 >> 2:", 15 >> 2);

console.log(" ***Relational Operators: in, ***");

console.log(" ***Grouping*** ");

let p = 1;
let q = 2;
let r = 3;

console.log(p + q * r); //Without Grouping
console.log(p + (q * r)); //With Grouping

console.log(" *** typeof *** ");

let size = 123;
console.log("Type of 123:", typeof size); //number
console.log("Type of 'Hello':", typeof "Hello"); //string

const arr = [1, 2, 3, 4, 5];
console.log("Type of arr:", typeof arr); //object
console.log("Type Arrays 4th Element :", typeof arr[4]); //number

console.log("Type of null:", typeof null); //object

console.log(" *** instanceof *** ");


let f_name = "John";
let l_name = "Doe";
console.log( f_name +  l_name); //Concatenation
