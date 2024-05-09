function findSum(n){
    let ans = 0;
    for (let i = 0; i<n;i++ ){
        ans += i;
    }
    return ans;
}

function findSumTill100(){
    console.log(findSum(100));
}

//busy waiting
function syncsleep(){
     let a = 0
    for(let i=0;i<=1000000000;i++){
        a++;
    }
}
syncsleep();


setTimeout(findSumTill100,1000);//settimeout is async
console.log("Hey Man")