const fs = require("fs");
//async function
function readingFile() {
    console.log("Inside Reading File");
    return new Promise(function (resolve) { //also contains reject as argument
        console.log("inside Promise")
        fs.readFile("a.txt", "utf-8", function (err, data) {
            console.log("Before resolving")
            resolve(data)   //returns data when resolved
        })
    })
}
//callback function to call
function onDone(data){
    console.log(data)
}

// readingFile().then(onDone) //Same as Below
let a = readingFile();
console.log(a) //Returns Promise
a.then(onDone)
