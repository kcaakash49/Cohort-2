console.log("Hello World");
//Program to greet a person given their first name and last name

let firstName = "Aakash"
let lastName = "KC"

console.log(`GoodMorning, ${firstName} ${lastName}`);

//Program that counts from 0-100 and prints
let sum = 0;
for(let i=0;i<=1000;i++){
    sum = sum + i;
}
console.log("Sum is ", sum)
//Greeting based on gender

let userInput = prompt("Are you Male/Female? Type m for male and f for female")
// let userInput = "fa";
if(userInput=="m"){
    console.log("Hello Sir")
}else if(userInput=="f"){
    console.log("Hello Maam")
}else{
    console.log("Please follow the instruction")
}