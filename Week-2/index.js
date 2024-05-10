// function promiseExample(d){
//     return new Promise(function(resolve){
//         setTimeout(() => {
//             resolve("I am done");
            
//         },d);
//     })
// }

// promiseExample(2000).then(function(data){
//     console.log(data)
//     console.log("Let me finish then")
// })


//map filter

let a = [2,4,5,6]
// let b = []

// a.map((item,index)=>{
//     b[index] = item *5
// })
const b = a.map((item)=>{
    return item*2
})
function transform(i){
    return i*3
}

const c=a.map(transform)

console.log(b);
console.log(c);

// a.filter()

const filterData = a.filter((n)=>{
    if(n%2 ==0){
        return true
    }else{
        return false
    }
})
const filteredData = a.filter(n=>n%2===0) //filters data which returns true to the condition
console.log(filteredData)