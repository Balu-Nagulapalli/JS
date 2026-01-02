console.log("Hello, Day 5!");

//For loop - Used when we know how many times to repeat something.
for(let count=1; count<=5; count++){
    console.log("For Loop Count:", count);
}

let even_sum = 0;
for(let i=1; i<=100; i++){
    if(i % 2 === 0)
    {
        even_sum += i;
    }
}
console.log("Sum of Even Numbers from 1 to 100 is:", even_sum);



let langu = "JavaScript";
for(let i=0; i<langu.length; i++){
    console.log(langu.charAt(i));
}

//Nested For Loop

for(let i=1; i<=3; i++)
    {
        for(let j=1; j<=3; j++)
        {
            console.log("i:", i, "j:", j);
        }
    }


for(let i=1; i<=5; i++){
        console.log(i);
    if(i === 3){
        break;
    }
}

for(let i=1; i<=5; i++){
    if(i === 3){
        continue;
    }
    console.log(i);
}

//Using two Counters in For Loop
for(let i=1, j=10; i<=10 && j>=1; i++, j--){
    console.log("i:", i, "j:", j);
 }


//while loop - Used when we don't know how many times to repeat something.
let counter = 1;
while(counter <= 5)
{
    console.log("While Loop Count:", counter);
    counter++;
}

//do while loop : - Executes the block of code once, and then repeats the loop as long as the specified condition is true.

let cnt = 1;
do{
    if(cnt === 3){
        cnt++; //to avoid infinite loop
        continue;
    }
    //code block to be executed
    console.log("Do-While Loop Count:", cnt);
    cnt++;
}
while(cnt <= 5){
}


//Infinite loop : A loop that never ends. It continues to execute indefinitely until externally interrupted or terminated.

/* for(;;){
    console.log("This is an infinite loop");
} */