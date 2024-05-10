const express = require("express")

const app = express()

// function calculateSum(n){
//     let ans = 0;
//     for (let index = 0; index <= n; index++) {
//         ans = ans + index;
        
//     }
//     return ans
// }

// app.get("/",function(req,res){
//     const num = req.query.n;
//     const sum = calculateSum(num);
//     res.send(`The sum is ${sum}`)
// })

const users = [
    {
        kidney:[
            // {
            //     isHealthy:false
            // },
            {
                isHealthy:false
            }
        ]
    }
]

app.use(express.json());

app.get("/",function(req,res){
    const akcKidney = users[0].kidney;
    console.log(akcKidney)
    let healthyKidney = 0;
    let noOfKidney = akcKidney.length;
    for (let index = 0; index < akcKidney.length; index++) {
        if(akcKidney[index].isHealthy){
            healthyKidney +=1;
            
        }
    }
    let unHealthyKidney = noOfKidney - healthyKidney;
    res.json({
        noOfKidney,
        healthyKidney,
        unHealthyKidney
    })

})

app.post("/",function(req,res){
    const addKidney = req.body.isHealthy;
    console.log(req.body.isHealthy)
    users[0].kidney.push({
        isHealthy : addKidney
    })
    console.log(users[0].kidney)
    res.json({
        msg : "Done"
    })
})

app.put("/",function(req,res){
    if(ifBadKidney()){
        for(let i=0;i<users[0].kidney.length;i++){
            users[0].kidney[i].isHealthy = true
        }
        res.json({
            msg: "Updated"
        })

    }else{
        res.status(411).send("All Your Kidneys are healthy")
    }
})

app.delete("/",function(req,res){
    //delete only if there is atleast one bad kidney
    if(ifBadKidney()){
        const newKidney = [];
        for(let i=0;i<users[0].kidney.length;i++){
            if(users[0].kidney[i].isHealthy){
                newKidney.push({
                    isHealthy: true
                })
            }
        
        }
        users[0].kidney = newKidney;
        res.send("Unhealthy Kidney Deleted")

    }else{
        res.status(411).send("You have no unhealthy kidney")
    }
})

function ifBadKidney(){
    let isTherBadKidney = false;
    
    for(let i=0;i<users[0].kidney.length;i++){
        if(!users[0].kidney[i].isHealthy){
            isTherBadKidney = true;
        }
    
    }
    return isTherBadKidney

}

app.listen(3000);