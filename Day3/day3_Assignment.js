console.log("Welcome to Day 3 Assignment");

console.log("Find Number is an Even or not")
let number = 10;
let res= number % 2 === 0 ? 'Even Number' : 'Odd Number';
console.log(number, 'is an', res);

console.log("Driving License Check")

let age = 17;
let canDrive = age >= 18 ? 'Eligible for Driving License' : 'Not Eligible for Driving License';
console.log("Age:", age, "-", canDrive);

console.log("Calculate CTC with a Bonus");

let salary= 12300;
let Annual_Salary = salary * 12;
let bonus = (20/100) * Annual_Salary;
console.log("Annual Salary:", Annual_Salary);
console.log("CTC with 20% Bonus:", Annual_Salary + bonus);

console.log("Traffic Light Signal Simulation");
let signal = "Red";
let action = signal === "Red" ? "Stop" : "GO";
console.log("Signal:", signal, "-", action);

console.log("Electricity Bill Calculation");
let units= 10;
let billForMonth = units * 150 * 30;
let annualBill = billForMonth * 12;
let discOnAnnualBill = annualBill - (20/100) * annualBill; 
console.log("Annual Bill After Discount:", discOnAnnualBill);

console.log("Leap Year Check");
let year = 2025;
let isLeapYear=(year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0) ? 'Leap Year' : 'Not a Leap Year';
console.log(year, "is", isLeapYear);


console.log("Max of Three Numbers");
let p= 10, q=20, r=50;
let result = (p >= q && p >= r) ? p : (q >= p && q >= r) ? q : r;
console.log("Max of", p, q, r, "is:", result);


console.log("Bitwise Doubling")
let count = 5;
let doubledCount = count << 1; // Left shift by 1 bit
console.log("Original Count:", count);
console.log("Doubled Count using Bitwise Left Shift:", doubledCount);