console.log("Hello, Day 04!");

let day = 4;
switch (day) 
{
    case 1 : 
        console.log("Monday");
        break;
    case 2 : 
        console.log("Tuesday");
        break;
    case 3 : 
        console.log("Wednesday");
        break;
    case 4 :
        console.log("Thursday");
        break;
    case 5 : 
        console.log("Friday");
        break;
    case 6 : 
        console.log("Saturday");
        break;
    case 7 :
        console.log("Sunday");
        break;
    default :
        console.log("Invalid Day");
}



console.log("**** Switch work as If else ****");
let city = "Bangalore";
switch (city) 
{
    case "Hyderabad":
    case "Bangalore":
    case "Agra":
    case "Jaipur":
        console.log("You are in India");
        break;
    case "New York":
    default:
        console.log("You are in USA");
}