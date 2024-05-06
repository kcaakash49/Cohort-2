//Calculate the time it takes between a setTImeout call and the inner funtion actually running
const time = new Date().getTime()
function greet(name){
    const exectionTime = new Date().getTime();
    const timeToExecute = exectionTime - time;
    console.log("Exection took "+timeToExecute+" ms")
    console.log("Hello "+ name)
}

setTimeout(greet,3000,"Aakash");//time may depend on load, a slight delay of few ms