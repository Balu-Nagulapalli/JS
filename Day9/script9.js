console.log("Welcome to Day 9 of 40 Days JS");
console.log('Name is ',name);
var name;
name = 'Tom' ;
console.log('Name is ',name)

//TDZ(Temporal Dead Zone) - An area where u cannot access a variable until it is initialized
//If we try to access anything with in the TDZ, it will give Reference Error 

//block
{
    //  name variable TDZ starts here
    //
    //console.log(name); // Reference Error 
    //
    //
    //
    //
    let name="Balu" //name varibale TDZ ends here
    console.log(name);
}

//TDZ starts beginnig of the block and ends when the variable will assigns the value.





//Function Hoisting

chase(); //involing a function chase()

//Declare a Function chase
function chase() {
    console.log('Tom Chases Jerry');
    caught(); //involing a function caught()
}

//Declare a Function caught()
function caught(){
    console.log('Tom caught Jerry');
}




test();
var test=function(){
    console.log('I am Being Tested');
}