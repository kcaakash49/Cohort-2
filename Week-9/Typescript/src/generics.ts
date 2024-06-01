

function readEle<T>(arr : T[]){ //generic
    return arr[0]
}
const result1 = readEle<number>([1,2,3])
console.log(result1)

const result2 = readEle<string>(["aakash","kc"])
console.log(result2.toUpperCase())

const result3 = readEle([true,false]); //can also identify if involves same data type
