function readingFile(){
    return new Promise((resolve)=>{
        //do some async logic here
        setTimeout(()=>{
            resolve("hey resolved")
            
        },1000)
    })
}

async function main(){
    let data = await readingFile(); //waits until the promise is resolved or rejected
    // let data = readingFile(); //doesnot return the resolved value but returns a promise
    console.log(data);
}

main();

console.log("Can i run before async")