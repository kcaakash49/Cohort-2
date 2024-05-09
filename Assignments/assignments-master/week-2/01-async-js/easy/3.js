const fs = require("fs");

// fs.readFile("akc.txt", "utf-8", function (err, data) {
//     console.log(data)
// })

function readingFile(cb) {
     fs.readFile("akc.txt", "utf-8", function (err, data) {
        // console.log(data)
        cb(data)
    })

}
function callback(d){
    console.log(d)
}

// let data = readingFile();
// console.log(data) //will return undefined as there is nothing on data right now
readingFile(callback)
console.log("Which will run first? i know i will")

