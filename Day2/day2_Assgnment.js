let name = "Balu";
let age = 22;
let isGraduated = false;
let favProgrammingLanguage = "Java";


console.log("Student Details:");
console.log("Name:", name);
console.log("Age:", age);
console.log("Is Graduated:", isGraduated);
console.log("Favorite Programming Language:", favProgrammingLanguage);



console.log("Updating Student Details...");
name = "Balu Nagulapalli";
console.log("Name:", name);


console.log("Non Primitive Data Types Examples:");

let arr = [10, 20, 30, 40, 50];
console.log("Third element in the array:", arr[2]);
console.log("Complete Array:", arr);
arr[2] = 35;
console.log("Updated Array:", arr);


console.log("Student Object Details:");

let student={
    name: "Balu Nagulapalli",
    age: 25,
    isGraduated: true,
    favProgrammingLanguage: "Java"
}
console.log("Initial Student Object:", student);
console.log("Updated Object Details:");
student.name = "Balu. N";
console.log("Name:", student.name);
student.age = 26;
console.log("Age:", student.age);



console.log("constant variable...");
const myName = "Balu";
myName = "New Balu"; 
