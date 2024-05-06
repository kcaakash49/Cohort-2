const personArray = ["Aakash","Sugal","Kalyan"];

console.log(personArray[0])

personArray.forEach((item)=>(
    console.log(item)
))

const ages = [222,33,44,11,56,100,111]
//using forEach property of array
ages.forEach((item)=>{
    if(item%2==0){
        console.log(item)
    }
})
//using for loop
for(let i = 0;i<ages.length;i++){
    if(ages[i]%2 == 0){
        console.log(ages[i])
    }
}
console.log("To print biggest number in array")
let big = ages[0];
ages.forEach((item)=>{
    if(item>big){
        big = item;
    }
})
console.log(big);

console.log("To print all the male people firstname given an complex object")
const detailArray = [
    {
        firstName:"Aakash",
        gender:"male",
        metaData:{
            age:30,
            address:"Tilottama"
        }
    },
    {
        firstName:"Shivanshika",
        gender:"female"
    },
    {
        firstName:"Sugal",
        gender:"male",
        metaData:{
            age:31,
            address:"Kathmandu"
        }
    },
    {
        firstName:"Sudha",
        gender:"female"
    },
]

detailArray.forEach((item)=>{
    // if(item.gender=="female"){
    //     console.log(item.firstName)
    // }
    if(item["gender"]=="male"){
        console.log(item.firstName)
        console.log(item["metaData"]["age"])
        console.log(item.metaData.address)
    }
    
})