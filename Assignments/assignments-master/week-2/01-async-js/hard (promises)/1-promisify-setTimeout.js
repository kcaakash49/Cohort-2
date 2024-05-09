/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("I am resolved")
        },n*1000)
    })
}
wait(3).then(function(data){
    console.log(data)
})
module.exports = wait;
