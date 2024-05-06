function sum(num1,num2,fnToCall){
    let result = num1 + num2;
    fnToCall(result);
}

function displayResult(data){
    console.log("Result of the sum is "+ data );
}
function displayResultPassive(data){
    console.log("The Sum is : "+data);
}

sum(1,2,displayResultPassive);//Callback, passing function as an argument

//Another Example
function sum1(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

function arthCalc(a,b,fn){
    return fn(a,b)
}

function arthCalc1(a,b){    
    return sum1(a,b)    //calling function inside function same as above
}

const value = arthCalc(5,2,sum1)
console.log("Value is: ",value)

const value1 = arthCalc1(5,4);
console.log("Value 1 is ", value1)

//Another Example Settimeout

function greet(){
    console.log("Good Morning")
}
function greetFriend(){
    console.log("Hey Man")
}

setTimeout(greet,3*1000);   //runs a greet function once after 3 seconds
setInterval(greetFriend,1*1000); //runs greetFriend function every second