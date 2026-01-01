//1. What will be the output of this code snippet and why?

let day = "Monday";

switch (day) {
   case "monday":
       console.log("It's the start of the week.");
       break;
   default:
       console.log("It's a normal day.");
}

//OUTPUT is "It's a normal day. "Because input Monday. Input is case-sensitive and doesn't match the case "monday".

//2. Build an ATM Cash Withdrawal System

//Rajan goes to the Axis bank ATM. He enters an amount to withdraw. The ATM only allows multiples of 100. Print “Withdrawal successful” if valid, otherwise print “Invalid amount”.
let withdrawAmount = 250;
if(withdrawAmount % 100 === 0){
    console.log("Withdrawal successful");
}
else{
    console.log("Invalid amount");
}

//3. Build a Calculator with switch-case
//Write a simple calculator that takes an operator (+, -, * , /, %) as input, and performs the operation on two numbers. Print the output on the console.
let num1 = 20;
let num2 = 10;
let operator = "-";
let result;
switch(operator){
    case "+":
        result = num1 + num2;
        break;
    case "-":
        result = num1 - num2;
        break;
    case "*":
        result = num1 * num2;
        break;
    case "/" :
        result = num1 / num2;
        break;
    case "%":
        result = num1 % num2;
        break;
    default:
        console.log("Invalid Operator");
}
console.log("Result:", result);

//4. Pay for your movie ticket
/* Imagine, the INOX charges ticket prices based on age:

Children (<18 years): $3
Adults (18 - 60 years): $10
Seniors (60+ years): $8
Write a program that prints the ticket price based on the person’s age */

let age=25;
if(age < 18){
    console.log("Ticket Price: $3");
}
else if(age >= 18 && age <= 60){
    console.log("Ticket Price: $10");
}
else{
    console.log("Ticket Price: $8");
}

//5. Horoscope Sign Checker
/*Write a program that prints the zodiac sign(Aries, Taurus, Gemini, etc.) based on a person’s birth month. Make it month bases, 
not date based. Like March and April borns are Aries, Aplil and May born are Taurus, and so on. Do not use if-else. */
let birthMonth = "April";
switch(birthMonth){
    case "March":
    case "April":
        console.log("Zodiac Sign: Aries");
        break;
    case "April":
    case "May":
        console.log("Zodiac Sign: Taurus");
        break;
    case "May":
    case "June":
        console.log("Zodiac Sign: Gemini");
        break;
    case "June":
    case "July":
        console.log("Zodiac Sign: Cancer");
        break;
    case "July":
    case "August":
        console.log("Zodiac Sign: Leo");
        break;
    case "August":
    case "September":
        console.log("Zodiac Sign: Virgo");
        break;
    case "September":
    case "October":
        console.log("Zodiac Sign: Libra");
        break;
    case "October":
    case "November":
        console.log("Zodiac Sign: Scorpio");
        break;
    case "November":
    case "December":
        console.log("Zodiac Sign: Sagittarius");
        break;
    case "December":
    case "January": 
        console.log("Zodiac Sign: Capricorn");
        break;
    case "January":
    case "February":
        console.log("Zodiac Sign: Aquarius");
        break;
    case "February":
    case "March":
        console.log("Zodiac Sign: Pisces");
        break;
    default:
        console.log("Invalid Month");
}


//6. Which Triangle?
/* A triangle has 3 sides. A Triangle type is determined by its sides:

All sides equal is called, Equilateral Triangle.
Two sides equal is called, Isosceles Triangle.
All sides different is called, Scalene Triangle.
Take the sides of a triangle as input and write a program to determine the triangle type.
Change the inputs everytime manually to see if the output changes correctly. */

let side1 = 5;
let side2 = 6;
let side3 = 8;

if(side1 === side2 && side2 === side3){
    console.log("Equilateral Triangle");
}
else if(side1 === side2 || side2 === side3 || side1 === side3){
    console.log("Isosceles Triangle");
}
else{
    console.log("Scalene Triangle");
}