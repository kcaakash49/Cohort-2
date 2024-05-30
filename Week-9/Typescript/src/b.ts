type User1 = {
    firstName : string,
    age : number
}

function isLegal2(user: User){
    if (user.age > 18){
        return true
    }else{
        return false;
    }
}

const iflegal = isLegal2({
    firstName:"aakash",
    age:17
})

console.log(iflegal)