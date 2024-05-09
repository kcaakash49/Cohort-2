const fs = require("fs");
//filesystem module

fs.readFile("a.txt","utf-8",function(err,data){
    console.log(data);
})

console.log("Hi there"); //will run first as readfile is async function

let a = 0;

for(let i = 0;i<=1000000000;i++){
    a++;
}

console.log("Hey there") //it runs before the readfile because callback will read after the thread is idle.


//latentflip.com/loupe   to check and understand async function operation how WebAPIs work callback queues 

