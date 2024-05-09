const fs = require("fs");

console.log("Starting")

fs.writeFile("4.txt","Its good to learn code",function(err,data){
    console.log("writing to file completed")
    fs.readFile("4.txt","utf-8",function(err,data){
        data = data + " Can i add something ?"
        console.log(data)
        fs.appendFile("4.txt"," I added Something",function(err,data){
            console.log("Added Successfully")
            fs.readFile("4.txt","utf-8",function(err,data){
                console.log(data)
            })
        })
    })
})

console.log("The End")

//This is also somewhat example of callback hell

