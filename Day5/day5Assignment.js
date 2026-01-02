console.log("Hello, Day 5 Assignment!");

//1. Generate a Pyramid Pattern using Nested Loop as it is shown below:
/* 

*
* *
* * *
* * * *
* * * * *

*/
for(let i=1; i<=5; i++)
    {
        let row = "";
        for(let j=1; j<=i; j++)
        {
            row += "* ";
        }
        console.log(row);
    }


//2. Craete Multiplication Table (Using for loop
console.log("Multiplication Table of 3:");

let num = 3;
for(let i=1; i<=10; i++)
{
    console.log(num + " x " + i + " = " + (num * i));
}


//3. Find the summation of all odd numbers between 1 to 500 and print them on the console log.
let odd_sum = 0;
for(let i=1; i<=500; i++)
{
    if(i %2!==0)
    {
        odd_sum += i;
    }
}
console.log("Sum of Odd Numbers from 1 to 500 is:", odd_sum);


//4. Skipping Multiples of 3
//Write a program to print numbers from 1 to 20, but skip multiples of 3.

for(let i=1; i<=20; i++)
{
    if(i % 3 === 0){
        continue;
    }
    console.log(i);
}

//5. Reverse Digits of a Number (Using while loop)
//Write a program to reverse the digits of a given number using a while loop.

let number = 6789;
let rev = 0;
while(number > 0)
{
    let digit = number % 10;
    rev = rev * 10 + digit;
    number = Math.floor(number / 10);
}
console.log("Reversed Number is:", rev);

//6. Write your understanding on the difefrences between for, while, and do-while loop. Create their flow charts.

//For loop - Used when we know how many times to repeat something.
for(initialization; condition; update)

{

//Block of Code

}

//while loop : Used when we don't know how many times to repeat condition/something.
while(condition)
{
    //Code
}

//do while loop : - Executes the block of code once, and then repeats the loop as long as the specified condition is true.
do{
    //code block to be executed
}
while(condition){
    //code block to be executed
}
