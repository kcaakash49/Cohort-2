const fs = require("fs");

function trimFile(){
    fs.readFile("1.txt","utf-8",function(err,data){
        console.log(data)
        let newData = data.replace(/\s+/g, ' ').trim();
        fs.writeFile("1.txt",newData,function(err){
            console.log("Write Successful")
            fs.readFile("1.txt","utf-8",function(err,data){
                console.log("New Text:",data)
            })
        })


    })
}

trimFile()