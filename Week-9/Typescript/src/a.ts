// let x: number = 1;
// x = "Aakash"
// console.log(x)

function greet(name: string){   //providing type in function parameter
    console.log("Hello "+ name )
}

greet("AKC")

function sum(a:number,b:number): number{        //ensures should return a number type
    return a + b
}

const value = sum(1,2);
console.log(value)

//ts can perform type inference that is it can evaluate what return type will be
function isLegal(age: number):boolean {
    if (age > 18){
        return true
    }else{
        return false
    }
}

let x:boolean = isLegal(19);

//giving type to a function

function runAfter1S(fn: () => void){    //type function that return nothing
    setTimeout(fn,1000); 
}

runAfter1S(()=>{
    console.log("Hey")
})

interface User {
    firstName :string,
    age: number,
    email?:string           // ? gives optional argument 
}
// function isLegal1(user: {
//     firstName: string,
//     age: number
// }) :boolean{
//     if (user.age > 18){
//         return true
//     }else {
//         return false
//     }
// }

function isLegal1(user:User):boolean{
    if (user.age > 18){
                return true
            }else {
                return false
            }
}

const result : boolean = isLegal1({
    firstName: "aakash",
    age:28
})
console.log(result)