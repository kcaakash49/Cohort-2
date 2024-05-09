let d = new Promise(function(resolve){
    setTimeout(() => {
        resolve("Aakash")
        
    }, 1000);
})

function onDone(){
    console.log(d)
}

console.log(d);

d.then(onDone)