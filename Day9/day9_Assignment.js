console.log('Welcome to Day 9 Assignment!');

/*
1. Expian Temporal Dead Zone by creating 3 variables
 in side a block. Post the code as your answer.
 */
{
    //
    //
    //
    console.log('Gender is ', gender);
    //
    var gender='Male';
   //
   //
   //console.log('Age is ', age);
   //
   //
   let age=20;
   //
   //
   console.log('Age is ', age);
   //
    //console.log('Location is ', location);
    //
    const location='Andhra Pradesh, Kakinada';
}

//This particular Block, gender variable TDZ starts where the code in the block starts. And gender variable TDZ ends where the variable got assigned.

//In Beginning let Age will get Reference Error because using the let age variable before 
// If we comment the first console.log of let, we will get age as 20.


//    // const: TDZ exists from block start till declaration, It will cause an Referrence Error


/*
2. Explain Variable and Function Hoisting
 with Example.Post the code as your answer.
*/

//Variabel Hoisting - The Phase we are creating memory for variable is known as variable hoisting.
console.log('Result is ', Result);
var Result='False';
console.log('Result is ', Result);

//First console output is Result is undefined
//Second console output is Result is False

//Function Hoistinf - The Phase we are creating memory for function and doing the basic initialization known as variable hoisting.

sunday(); //invoking

function sunday(){
    console.log('Im Enjoying Sunday!');
    monday(); //invoking
    var monday=function(){
        console.log('Working Day!!!');
    }
}
//Prints -> Im Enjoying Sunday!
// Shows error 
/*
GEC:
    CP:
        sunday(): initialize and memory creation
        monday: undefined
    EP:
        FEC(for sunday)
            CP:
                Im Enjoying Sunday!
            EP:
            undefined() - type error
*/