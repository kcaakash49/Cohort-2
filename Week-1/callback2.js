function square(n){
    return n*n;
}
function cube(n){
    return n*n*n;
}

function final(n1,n2,fn,fn1){
    return fn(n1) + fn1(n2);
}

console.log(final(3,2,cube,square))

function sum(a,b,callback){
    const val1 = callback(a)
    const val2 = callback(b)
    return val1+val2
}


const ans = sum(2,2,(n)=>{
    return n*n
})

console.log("the answer is ",ans)
